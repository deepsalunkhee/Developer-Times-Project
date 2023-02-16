import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link,useNavigate} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './comp.css'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
      <Container>
        <Link to="/" color="white"><h1>Developer Times</h1></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Row className="justify-content-between">
           <Col><button className="button"><Link to="/engineering" >Engineering</Link></button></Col> 
           <Col><button className="button"><Link to="/movies" >Movies</Link></button></Col> 
           <Col><button className="button"><Link to="/health" >Health</Link></button></Col> 
           <Col><button className="button"><Link to="/science" >Science</Link></button></Col> 
           <Col><button className="button"><Link to="/sport" >Sport</Link></button></Col> 
           <Col><button className="button"><Link to="/tech" >Tech</Link></button></Col> 

          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
