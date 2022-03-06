import '../../index.css'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from '../../assets/images/mode-logo.png'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {

    return (

        <><>
            <Navbar bg="light" expand="lg bg-light fixed-top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <Image height={25} src={logo} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={NavLink} to="/" activeclassname="active">Inicio</Nav.Link>
                            <NavDropdown title={"Categorias"} id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to={`products/MLA1051`} activeclassname="active">Celulares y telefonos</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={`products/MLA1144`} activeclassname="active">Consola y Videojuegos</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to={`products/MLA1648`} activeclassname="active">Computadoras</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                       <Nav>
                       <Link to="/cart"> <CartWidget /></Link>
                       </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
        </>
    )
}

export default NavBar
