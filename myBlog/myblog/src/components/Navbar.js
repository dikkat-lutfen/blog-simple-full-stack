import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (

    
      <Navbar bg="primary" variant="dark">
        <Container>
    
          <Nav className="me-auto">
            <Nav.Link href="/">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

      

  );
}

export default ColorSchemesExample;