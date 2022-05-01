import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSprout, faBiking, faClapperboard, faStore } from "@fortawesome/free-solid-svg-icons";


const NavigationBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="/" className='nav-title'>

                    YoHoHealth</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link href="/" className='me-4'><FontAwesomeIcon className='icon' icon={faHome} />Home</Nav.Link>
                        <Nav.Link href="/fitness" className='me-4'><FontAwesomeIcon className='icon' icon={faBiking} />Fitness</Nav.Link>
                        <Nav.Link href="/celebrity" className='me-4'><FontAwesomeIcon className='icon' icon={faClapperboard} />CelebMotivation</Nav.Link>
                        <Nav.Link href="/food" className='me-4'><FontAwesomeIcon className='icon' icon={faSprout} />EatHealthy</Nav.Link>
                        <Nav.Link href="/deals" className='me-4'><FontAwesomeIcon className='icon' icon={faStore} />Shop</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
