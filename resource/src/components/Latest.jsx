import React from 'react'
import SingleCard from './SingleCard'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const Latest = () => {
  const movies = useSelector(p=>p);

  return (
    <div className='bg-black'>
    <Container className='pt-3 pb-3'>
      <h3 className='text-light mb-5'>Latest reviews</h3>
      <Row className='w-100'>

        {movies.slice(0,6).map((item,count)=>(

          <SingleCard key={count} title={item.title} price={item.price} rate={item.rate} photo={item.image}/>

        ))}

      </Row>
    </Container>
    </div>
  )
}

export default Latest