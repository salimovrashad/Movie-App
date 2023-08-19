import { Button, Col, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovieFromDatabase } from '../../manager/actions/movieAction';

function Admin() {
  const movies = useSelector(p=>p);
  const dispatch = useDispatch();
    
  return (
   <div className='w-100 bg-black'>
    <Container>
    <h1 className='text-center text-light py-5'>Admin Panel</h1>
    <Link className='btn btn-success me-3' to="/review">Home</Link> 
    {/* bu linki vermesem reload olur ve elave olunan silinir */}


    <Link className="btn btn-success my-4" to="/admin/add">Add movie</Link>  
        
        <Col md={12}>
        <Table striped bordered hover variant="dark" className='m-0'>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Rate</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {movies.map((item,count)=>(
            <tr key={count}>
          <td>{count+1}</td>
          <td><img src={item.image} width={100} alt="" /></td>
          <td>{item.title}</td>
          <td>{item.rate} IMDB</td>
          <td><Link className='btn btn-warning' to={`/admin/edit/${item.id}`}><i class="fa-solid fa-pen-to-square"></i></Link></td>
          <td><Button onClick={()=>{dispatch(removeMovieFromDatabase(item.id))}} variant='danger'><i class="fa-solid fa-trash"></i></Button></td>
        </tr>
        ))}
        
      
      </tbody>
    </Table>
        </Col>
   </Container>
   </div>
  );
}

export default Admin;