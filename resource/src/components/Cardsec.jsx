import React from 'react'
import SingleCard from './SingleCard'
import { useSelector } from 'react-redux';

const Cardsec = () => {
  const movies = useSelector(p=>p);

  return (
    <div className='w-100 h120 bg8'>
        <div className="container bg-none text-secondary px-4 py-5 text-start">
  <div className="py-5">
    <h1 className="display-5 fw-bold text-white">Northworld: Season One</h1>
    <div className="col-lg-6">
      <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    </div>
  </div>
</div>


    <div className='row m-0 w-100 d-flex justify-content-center gap-5'>
   
        {movies.slice(0,4).map((item,count)=>(
            
            <SingleCard key={count} title={item.title} price={item.price} rate={item.rate} photo={item.image}/>

        ))}

    </div>

    </div>
  )
}

export default Cardsec