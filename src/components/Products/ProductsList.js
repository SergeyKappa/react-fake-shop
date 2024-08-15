import { Typography } from '@mui/material'
import React from 'react'

const ProductsList = () => {
    let uppercase = 'uppercase'
    let lowercase = 'lowercase'
    let state = false
    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                style={{
                    textTransform: state ? uppercase : lowercase,
                    color: 'blue',
                    margin: '30px 0',
                }}
            >
                Products List
            </Typography>
        </>
    )
}

export default ProductsList
