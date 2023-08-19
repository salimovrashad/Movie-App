import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const MovieForm = ({sendData,editmovie}) => {
    const [photo,setPhoto] = useState(editmovie?editmovie.image:"");
    const [title,setTitle] = useState(editmovie?editmovie.title:"");
    const [price,setPrice] = useState(editmovie?editmovie.price:"");
    const [rate,setRate] = useState(editmovie?editmovie.rate:"");
    const movieFormSubmit =e=>{
        e.preventDefault();
        sendData({
            image:photo,
            title:title,
            price:price,
            rate:rate
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <Col md={6}>
                <Form onSubmit={movieFormSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo</Form.Label>
                        <Form.Control value={photo} onChange={e=>setPhoto(e.target.value)} type="text" placeholder="Enter photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control  value={price}onChange={e=>setPrice(e.target.value)} type="text" placeholder="Enter price" />
                    </Form.Group>


                    <Form.Group className="mb-3" >
                        <Form.Label>Rate</Form.Label>
                        <Form.Control value={rate} onChange={e=>setRate(e.target.value)} type="text" placeholder="Enter rate" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                       {editmovie?"Edit":"Add"}
                    </Button>
                </Form>
            </Col>
        </div>
    )
}

export default MovieForm