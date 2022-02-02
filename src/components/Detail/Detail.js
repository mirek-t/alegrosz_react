import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Grid, Rating, Stack, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SendIcon from '@mui/icons-material/Send';

import faker from '@faker-js/faker';


function Detail(){

  const params = useParams();

  const [product, setProduct] = useState({});
  const [value, setValue] = useState(Math.round(Math.random()*4 + 1));

  useEffect(() => {
    getProduct().catch(() => {});
  }, [])

  const getProduct = async () => {
    const response = await axios.get(`http://localhost:3000/products/${params.id}`);
    setProduct(response.data)
  }

  const itemData = [
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },
    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    },    {
      img: faker.image.transport(164, 164, true),
      title: 'Peugeot',
    }
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h2">
        {product.name}
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        {product.shortDescription}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom component="div">
              {product.description}
            <Stack alignItems="center" direction="row" spacing={2}>
              <Rating name="read-only" value={value} readOnly />
              <Button variant="contained"  endIcon={<SendIcon />}>
                Buy now!
              </Button>
            </Stack>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;