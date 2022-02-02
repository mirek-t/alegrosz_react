import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Grid } from '@mui/material';

import ProductCard from '../ProductCard/ProductCard';
import FilterForm from '../FilterForm/FilterForm';


const topProducts = [
    { label: 'piwo' },
    { label: 'cukier' },
    { label: 'mleko' },
    { label: 'śruby M10' }
];

function Home() {

    const [products, setProducts] = useState([]);
    const [priceSort, setPriceSort] = useState("no");

    useEffect(() => {
        getProducts().catch(() => {});
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:3000/products")
        setProducts(response.data)
    };

    const handleChange = (evt) => {
        setPriceSort(evt.target.value);
    };

    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={2} mt={2}>
                    <Grid container xs={3}>
                        <FilterForm topProducts={topProducts} handleChange={handleChange} priceSort={priceSort}/>
                    </Grid>
                    <Grid container spacing={2} xs={9}>
                        {[...products].sort((a, b)=>{
                            if (priceSort === "asc"){ 
                                return a.price < b.price ? -1 : 1
                            } else if (priceSort === "desc"){
                                return a.price > b.price ? -1 : 1
                            } else {
                                return 0;
                            }
                        }).map((product) => (<ProductCard key={product.id} product={product} />))}
                    </Grid> 
                </Grid>
            </Container>
        </div>
    );
}

export default Home;