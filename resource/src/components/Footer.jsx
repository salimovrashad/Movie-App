import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container-fluid bg-black pt-3">
  <footer className="py-4">
    <ul className="container nav justify-content-start border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Coming soon</Link></li>
      <li className="nav-item"><Link to="/review" className="nav-link px-2 text-white">Reviews</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">News & Gossips</Link></li>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Pages</Link></li>
    </ul>
    <ul class="w-100 nav col-md-4 justify-content-center list-unstyled d-flex">
      <li class="ms-3"><Link to="/" class="text-light"><i class="fa-brands fa-facebook"></i></Link></li>
      <li class="ms-3"><Link to="/" class="text-light"><i class="fa-brands fa-twitter"></i></Link></li>
      <li class="ms-3"><Link to="/" class="text-light"><i class="fa-brands fa-instagram"></i></Link></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer