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

                        <Nav.Link href="/" className='me-4'><i className="fas fa-home icon"></i>Home</Nav.Link>
                        <Nav.Link href="/fitness" className='me-4'><i className="fas fa-biking icon"></i>Fitness</Nav.Link>
                        <Nav.Link href="/food" className='me-4'><i className="fas fa-biking icon"></i>Food</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCb6ZlyWymyuDdBVbhVtJp7Q" target='_blank' className='me-4'><i className="fab fa-youtube icon"></i>YouTube</Nav.Link>
                        <Nav.Link href="/food" className='me-4'><i className="fab fa-instagram icon"></i>Instagram</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
