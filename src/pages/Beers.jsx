import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BeerCard from '../components/BeerCard'
import Header from '../components/Header'

const url = 'https://ih-beers-api2.herokuapp.com/beers'

const Beers = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
      axios
          .get(url)
          .then(response => {
            setBeers(response.data)
            console.log(response.data);
          },
          [beers])
    }
    )

  return (
    <div>
      <Header />
      {beers.map(beer => <BeerCard key={beer._id} beer={beer} />)}
    </div>
  )
}

export default Beers