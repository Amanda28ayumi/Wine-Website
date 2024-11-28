import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
// logo
import Logo from '../assets/preview.png.webp'

export function Header( props ) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <img src={Logo} style={{ maxWidth: '80px'}} />
                    { props.text }
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                        <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
                        <Nav.Link as={Link} to="/register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}