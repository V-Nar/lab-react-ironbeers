import React from 'react'
import { Link } from 'react-router-dom'
import bar from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

const HomePage = () => {
  return (
    <div>
        <section>
            <img src={bar} alt='bar' />
            <h1><Link to="/beers">All Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam incidunt eaque doloribus, cupiditate eos autem facilis omnis praesentium velit nemo atque error. Neque magni porro molestiae aut tempore maxime voluptatem?</p>
        </section>
        <section>
            <img src={randomBeer} alt='random' />
            <h1><Link to="/random-beer">Random Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam incidunt eaque doloribus, cupiditate eos autem facilis omnis praesentium velit nemo atque error. Neque magni porro molestiae aut tempore maxime voluptatem?</p>
        </section>
        <section>
            <img src={newBeer} alt='new' />
            <h1><Link to="/new-beer">New Beers</Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam incidunt eaque doloribus, cupiditate eos autem facilis omnis praesentium velit nemo atque error. Neque magni porro molestiae aut tempore maxime voluptatem?</p>
        </section>
    </div>
  )
}

export default HomePage