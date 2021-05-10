import React from 'react'
import { Navbar, Form, Button, Nav, FormControl, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/video">Video</Nav.Link>
                        <Nav.Link as={Link} to="/account">Account</Nav.Link>
                        <Nav.Link as={Link} to="/welcome">Welcome</Nav.Link>
                        <Nav.Link as={Link} to="/auth">Auth</Nav.Link>

                    </Nav>
                    <Form inline className="d-flex">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" className="mx-2">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavMenu
