import axios from 'axios'
import React, { useEffect, useState } from 'react'

const url = 'https://ih-beers-api2.herokuapp.com/beers'

const Beers = () => {
    const [beers, setBeers] = useState([])

    useEffect(
        axios
            .get(url)
            .then(response => {
                setBeers(response.data)
            }),
            []
    )
  return (
    <div>Beers</div>
  )
}

export default Beers