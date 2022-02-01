/* eslint-disable react/react-in-jsx-scope */

import '../index.css'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from '../assets/images/mode-logo.png'
import { Link, NavLink } from 'react-router-dom'
import SearchWidget from './SearchWidget'
const NavBar = ({ categories }) => {
    let filtrador = categories.filter((Element)=>{
        if(Element.id === "MLA1648"|| Element.id ==="MLA1144" ||Element.id ==="MLA1051"  ){
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
                                filtrador.map((category) => {
                                    return (<NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>)
                                })
                                }
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Nosotros</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                        <SearchWidget />
                        <Nav >
                            <Nav.Link href="#home"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
        </>
    )
}

export default NavBar
