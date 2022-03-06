import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
export const Hero = () => {
    return (
        <Container className='hero-container'>
            <div className="hero-container__text-box">
                <h1>Mode</h1>
                <p>
                    Los Mejores Productos los encuentras aquí
                </p>
                <Link to="/products">
                    <Button variant="outline-dark">
                        Ver Productos
                    </Button>
                </Link>
            </div>
        </Container>
    )
}
