import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../css/style.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <Navbar style={{position:"absolute", zIndex:"100"}} className="bg-none border-bottom w-100">
      <Navbar.Brand className='mx-3' href="#home">
            <img
              src="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/logo-white.png"
              width="40"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
          </Navbar.Brand>
        <Container>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link><Link className='navtext text-decoration-none' to={"/"}>Home</Link></Nav.Link>
            <Nav.Link className='navtext mx-3' href="/features">Coming soon</Nav.Link>
            <Nav.Link><Link className='navtext text-decoration-none' to={"/review"}>Reviews</Link></Nav.Link>
            <Nav.Link className='navtext mx-3' href="/pricing">News & Gossips</Nav.Link>
            <Nav.Link><Link className='navtext text-danger text-decoration-none' to={"/login"}><i class="fa-solid fa-user"></i></Link></Nav.Link>

              {/* 
                  "LinkContainer" error verir...
                  "a href" ləridə "Link" edəndə error verir  
              */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;