import React from 'react'
import MovieForm from '../MovieForm'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addMovieToDatabase } from '../../../manager/actions/movieAction'
import { useNavigate } from 'react-router-dom'

export const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-3'>Add Movie</h1>
        <MovieForm sendData={(i)=>{
                dispatch(addMovieToDatabase(i));
                navigate('/a98db973kwl8xp1lz94k')
        }}/>
    </Container>
  )
}

export default AddMovie