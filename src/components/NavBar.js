
import "../index.css"
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import CartWidget from "./CartWidget"
import logo from "../assets/images/mode-logo.png"
const NavBar = () => {
    return (
        
        <><>
            <Navbar bg="light" expand="lg bg-light fixed-top">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image height={25} src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Zapatos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"><CartWidget/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
        </>
    )
}

export default NavBar
