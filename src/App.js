
import './App.css';
import a from "./imeges/a.jpg";
import b from "./imeges/b.jpg";
import c from "./imeges/c.jpg";
import {Nav,Navbar,Container,Card,CardGroup,Form,Row,Col,Button} from 'react-bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
    <div className="App">
       {/* --- Navbar Part ----- */} 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className='clinic'>AL-Sendan Clinic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='homepage'>Home page</Nav.Link>
            <Nav.Link href="#home" className='about'>about as</Nav.Link>
            <Nav.Link href="#features" className='medical'>Medical services</Nav.Link>
            <Nav.Link href="#pricing" className='doctors'>Our Doctors</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       {/* --- Cards Part ----- */}
<div className='cards'>
    <CardGroup>
      <Card className='ali' >
        <Card.Img variant="top" src={a} />
        <Card.Body>
          <Card.Title>Dr.Ali Hatem</Card.Title>
          <Card.Text>
          General Surgeon Almarsa-Tunisia
          </Card.Text>
        </Card.Body>
      </Card>
      
        <Card className='mohanned'>
        <Card.Img variant="top" src={c}/>
        <Card.Body>
          <Card.Title>Dr.Mohanned Abudaber</Card.Title>
          <Card.Text>
          Obstetrician- Gynecologist Tripoli-Libya
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='najla'>
        <Card.Img variant="top" src={b}/>
        <Card.Body>
          <Card.Title >Dr.Najla Ahmed</Card.Title>
          <Card.Text>
          Orthopedic Surgeon Cairo-Egypt 
          </Card.Text>
        </Card.Body>
      </Card>
    
    </CardGroup>
    </div>
    <Card> 
        <Card.Footer>
            {/* --- Form Part ----- */}
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
        <h5>Sign Up For Our Newsletter</h5>
        </Form.Label>
        <Col sm="6">
          <Form.Control type="email" placeholder="Email address" />
        </Col>
        <Col sm="3">
        <Button type="button" class="btn btn-outline-light mb-4">
              Subscribe
            </Button>
        </Col>
      </Form.Group>
      {/* --- Footer Part ----- */}
      <footer className='footer'>
      <h3>Contact Us :- sendanclinic@gmail.com</h3>
      <p>Our quality policies lie in providing our health services with apatient-oriented approach in accordance with international standards Open to development and technology We care about patient satisfaction and staff We are mobilized to provide reliable diagnosis, treatment and exemplary care environment
        Our services provide people with reliable service and respect for patient rights and privacy
        </p></footer>
          </Card.Footer>
          </Card>
    </div>)}


export default App;
