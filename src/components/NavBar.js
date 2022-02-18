/* eslint-disable react/react-in-jsx-scope */

import '../index.css'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import CartWidget from './views/CartWidget'
import logo from '../assets/images/mode-logo.png'
import { Link, NavLink } from 'react-router-dom'
import SearchWidget from './SearchWidget'
import Category from './Category'
const NavBar = ({ productos }) => {
    let filtrador = productos.filter((Element)=>{
        if(Element.id === "MLA1648"|| Element.id ==="MLA1051"  ){
            return Element
        }
    })
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
                            {
                                productos.map((producto) => {
                                    return (<NavDropdown.Item key={producto.id} as={Link} to={`/category/${producto.category}`}>{producto.name}</NavDropdown.Item>)
                                })
                                }

                               
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Nosotros</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        <SearchWidget />
                        <Link to="/cart"> <CartWidget /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
        </>
    )
}

export default NavBar
