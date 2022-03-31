import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="md" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">

                    YoHoHealth</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
