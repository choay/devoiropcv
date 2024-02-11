import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {


  return (
    <>
    <Navbar variant='dark' expand="lg" className="bg-dark sticky-top sm-fixed-top">
      <Container>
      <a href="#top"><img src="/favicon.ico" style={{width : '30px'}} alt="logo"/></a>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse className='flex-lg-row-reverse' id="navbarScroll">
          <Nav className=''
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Link to='/'>ACCUEIL</Link>
            <Link to='/services'>SERVICES</Link>
            <Link to='/realisations'>REALISATIONS</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/contact'>ME CONTACTER</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;