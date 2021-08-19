import React from 'react';
import { Container , Navbar } from 'react-bootstrap';

const Navbars = () => {
    return (
        <>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Country Info</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars; 
