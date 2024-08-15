import React from 'react'
import { Typography } from '@mui/material'
import './ProductsList.css'

export const ProductsList = () => {
    // let uppercase = 'uppercase'
    // let lowercase = 'lowercase'
    // let state = false

    return (
        <>
            <Typography
                align="center"
                component="h1"
                variant="h4"
                className="title"
                // style={{
                //     textTransform: state ? uppercase : lowercase,
                //     color: 'blue',
                //     margin: '30px 0',
                // }}
            >
                Products List
            </Typography>
        </>
    )
}
