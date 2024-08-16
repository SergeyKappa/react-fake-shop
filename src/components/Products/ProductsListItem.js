import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsList.css'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    image,
    name,
    desc,
    type,
    capacity,
    price,
}) => {
    const [pieces, setPieces] = useState(0)

    function addPieces() {
        setPieces((prev) => prev + 1)
    }
    return (
        <>
            <Card>
                <CardContent className="card-info">
                    <div className="card-img">
                        <img src={image} alt="" />
                    </div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <div>Type: {type}</div>
                    <div> Capacity: {capacity} GB</div>
                    <div>{price}$</div>
                    <p>{pieces}</p>
                    <Button variant="outlined" onClick={() => setPieces(0)}>
                        Reset
                    </Button>
                </CardContent>
                <CardActions className="card-btn">
                    <Button variant="contained" onClick={addPieces}>
                        Add to card
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}
ProductsListItem.defaultProps = {
    desc: 'No description....',
}
