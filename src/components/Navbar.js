import './Narbar.css'
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <div>
            <Navbar className='mNavbar' collapseOnSelect>
                <Container>
                    <Navbar.Brand className='Byb' href="/">BYB Gym</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Booking</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='signIn' href="#">Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default NavbarComponent;
