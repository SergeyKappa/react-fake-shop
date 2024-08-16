import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import ToggleColorMode from 'components/DarkMode/DarkMode'

export const Main = () => {
    return (
        <Container>
            <ProductsList />
            {/* <ToggleColorMode /> */}
        </Container>
    )
}
