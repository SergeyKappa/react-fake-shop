import React from 'react'
import { Grid, Typography } from '@mui/material'
import './ProductsList.css'
import { ProductsListItem } from './ProductsListItem'
import { ProductsListData } from './ProductsListData'

export const ProductsList = () => {
    // let uppercase = 'uppercase'
    // let lowercase = 'lowercase'
    // let state = false
    const cardsData = ProductsListData.map(
        ({ id, image, name, desc, type, capacity, price }) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductsListItem
                        image={image}
                        name={name}
                        desc={desc}
                        type={type}
                        capacity={capacity}
                        price={price}
                    />
                </Grid>
            )
        }
    )

    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                className="title"
            >
                Products List
            </Typography>

            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {cardsData}
            </Grid>
        </>
    )
}
