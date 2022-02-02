import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Grid } from '@mui/material';

import ProductCard from '../ProductCard/ProductCard';
import FilterForm from '../FilterForm/FilterForm';
import { useSearchParams } from 'react-router-dom';

function Home() {

    const [products, setProducts] = useState([]);
    const [priceSort, setPriceSort] = useState("no");
    const [topProducts, setTopProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const price = searchParams.get("sortPrice");
        const product = searchParams.get("product")
        setPriceSort(price ? price : "no");
        setProductName(product ? product : "");
        getProducts().catch(() => {});

        setLoading(false)
    }, []);

    useEffect(() => {
        if (!(priceSort === "no" && productName === "")){
            updateParams();
        } else {
            setSearchParams({});
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800)

    }, [priceSort, productName]);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:3000/products")
        setProducts(response.data);
        setTopProducts(response.data.map((item) => ({label: item.name})));
    };
    
    
    const updateParams = () => {
        setSearchParams({
            "sortPrice": priceSort,
            "product": productName
        });
    }

    const handleChange = (evt) => {
        setPriceSort(evt.target.value);

    };
    
    const handleSearchProduct = (evt, val) => {
        setProductName(val ? val?.label : "");
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} mt={2}>
                <Grid container>
                    <FilterForm handleSearchProduct={handleSearchProduct} topProducts={topProducts} handleChange={handleChange} priceSort={priceSort} productName={productName}/>
                </Grid>
                <Grid container spacing={2} >
                {loading ? (<div class="loader">Loading...</div>) : (
                    [...products].filter(item => productName === "" ? true : item.name===productName).sort((a, b) => {
                        if (priceSort === "asc"){ 
                            return a.price < b.price ? -1 : 1
                        } else if (priceSort === "desc"){
                            return a.price > b.price ? -1 : 1
                        } else {
                            return 0;
                        }
                    }).map((product) => (<ProductCard key={product.id} product={product} />)))}
                </Grid> 
            </Grid>
        </Container>    
    );
}

export default Home;