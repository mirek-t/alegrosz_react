import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

import faker from "@faker-js/faker"
import { Link } from 'react-router-dom';

function ProductCard({product: {id, name, price, description, shortDescription}}){

    return (
        <Grid item xs={12} sm={6} xl={2}>
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={faker.image.business(345, 140, true)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {shortDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/detail">
                    <Button size="small">Details</Button>
                </Link>
            </CardActions>
        </Card>
        </Grid>
    );
};

export default ProductCard;