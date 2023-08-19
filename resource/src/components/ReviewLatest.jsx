import React from 'react'
import SingleCard from './SingleCard'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const ReviewLatest = () => {
  const movies = useSelector(p=>p);

  return (
    <div className='bg-black'>
    <Container className='pt-3'>
      <h3 className='text-light mb-5'>Reviews</h3>
      <Row className='w-100'>

        {movies.map((item,count)=>(

          <SingleCard key={count} title={item.title} price={item.price} rate={item.rate} photo={item.image}/>

        ))}

      </Row>
    </Container>
    </div>
  )
}

export default ReviewLatest