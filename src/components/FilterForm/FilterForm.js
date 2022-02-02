import React from 'react';

import { Grid, Paper, Stack, TextField, Autocomplete } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FilterForm({topProducts, priceSort, handleChange, handleSearchProduct, productName}){
    return (
        <Grid item  xs={3}>
            <Stack spacing={2}>
                <Item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        value={productName}
                        options={topProducts}
                        onChange= {handleSearchProduct}
                        renderInput={(params) => <TextField {...params} label="Product" />}
                    />
                    <Stack mt={2} direction="row" alignItems="center" justifyContent="center">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Price</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={priceSort}
                                label="Price"
                                onChange={handleChange}
                            >
                                <MenuItem value="no">---</MenuItem>
                                <MenuItem value="asc">Asc</MenuItem>
                                <MenuItem value="desc">Desc</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Item>
            </Stack>
        </Grid>
    );
};

export default FilterForm;

