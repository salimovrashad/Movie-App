import '../css/style.css'
import Cardsec from './Cardsec';
import Carousel1 from './Carousel1';
import Footer from './Footer';
import Latest from './Latest';
import Navbar1 from './Navbar1';
import Sec2 from './Sec2';

function Home() {
  return (
    <>
    <Navbar1 />
    <Carousel1 />
    <Latest />
    <Cardsec />
    <Sec2 />
    <Footer />
    </>
  );
}

export default Home;