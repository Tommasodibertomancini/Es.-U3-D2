import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNav = function () {
  return(
  <Navbar
    expand="md"
    bg="dark"
    data-bs-theme="dark"
  >
    <Container fluid>
      <Navbar.Brand className='fw-bold' href="#">EPIBOOKS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNav
