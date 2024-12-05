import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
// logo
import Logo from '../assets/Win&Valley.jpg'

export function Header( props ) {
    return (
        <Navbar expand="lg" style={{backgroundColor:"#741841"}}>
            <Container>
                <Navbar.Brand className="text-light">
                    <img className="d-block mx-auto" src={Logo} style={{ maxWidth: '80px'}} />
                    <div> { props.text } </div>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="text-light">About us</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="text-light">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-light">Contact us</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="text-light">Sign in</Nav.Link>
                        <Nav.Link as={Link} to="/register" className="text-light">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}