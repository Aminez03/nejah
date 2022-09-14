import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NaveBare = () => {
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src="https://www.webrankinfo.com/dossiers/wp-content/uploads/youtube-logo-2017-743.png" alt="logo" style={{width:"120px",hight:"80px",marginLeft:"50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="ok"
              style={{width:"525px",marginLeft:"280px"}}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NaveBare