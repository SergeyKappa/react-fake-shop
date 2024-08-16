import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsList.css'

export const ProductsListItem = (props) => {
    
    const [pieces, setPieces] = useState(0)

    function addPieces() {
        setPieces((prev) => prev + 1)
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent className="card">
                    <img src={props.url} alt="" />
                    <h4>{props.name}</h4>
                    <p>{props.desc}</p>
                    <div>{props.type}</div>
                    <div>{props.capacity}</div>
                    <div>{props.price}</div>
                    <p>{pieces}</p>
                    <Button variant="outlined" onClick={() => setPieces(0)}>
                        Reset
                    </Button>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        className="card-btn"
                        onClick={addPieces}
                    >
                        Add to card
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
