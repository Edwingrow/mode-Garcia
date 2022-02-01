/* eslint-disable react/react-in-jsx-scope */

import '../index.css'
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap'
import CartWidget from './CartWidget'
import logo from '../assets/images/mode-logo.png'
import { Link, NavLink } from 'react-router-dom'
import SearchWidget from './SearchWidget'
const NavBar = ({ categories }) => {
    let filtrador;
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
                                    categories.filter((Element) => {
                                        if (Element.name !== "Agro"
                                         && Element.name !== "Alimentos y Bebidas" 
                                        && Element.name !== "Animales y Mascotas" 
                                        && Element.name !== "Antigüedades y Colecciones" 
                                        && Element.name !== "Autos, Motos y Otros"
                                        && Element.name !== "Arte, Librería y Mercería"
                                        && Element.name !== "Bebés"
                                        && Element.name !== "Belleza y Cuidado Personal"
                                        && Element.name !== "Entradas para Eventos"
                                        && Element.name !== "Industrias y Oficinas"
                                        && Element.name !== "Joyas y Relojes"
                                        && Element.name !== "Juegos y Juguetes"
                                        && Element.name !== "Libros, Revistas y Comics"
                                        && Element.name !== "Música, Películas y Series"
                                        && Element.name !== "Ropa y Accesorios"
                                        && Element.name !== "Salud y Equipamiento Médico"
                                        && Element.name !== "Servicios"
                                        && Element.name !== "Souvenirs, Cotillón y Fiestas"
                                        && Element.name !== "Otras categorías"
                                        ) {
                                            return !!Element;
                                        }
                                    }).slice(0, 6).map((category) => { 
                                        return (<NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>)
                                    })
                                }
                                <Nav.Link as={NavLink} to="/categories" activeclassname="active"> Ver más productos</Nav.Link>
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
