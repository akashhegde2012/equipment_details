import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className='footer'>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; equipments
                </Col>
            </Row>
        </Container>
    )
}

export default Footer