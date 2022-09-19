import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = (beer) => {
  return (
    <div>
        <Link to={beer._id}>
            <image src={beer.image_url }/>
        </Link>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
        
    </div>
  )
}

export default BeerCard