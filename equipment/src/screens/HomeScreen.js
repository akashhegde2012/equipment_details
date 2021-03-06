import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EntryForm from '../components/EntryForm';
import Equipment from '../components/Equipment'
const HomeScreen = ({currentId,setCurrentId}) => {
    const equipments = useSelector(state=>state.equipments)
    return (
        <Container fluid>
            <h1>Latest equipments</h1>
                <Row>
                    <Col md={9} xs={12} >
                    {!equipments.length && <Spinner size='md' animation="border" variant="success" />}
                        <Row>
                            {equipments.map(equipment=>
                            <Col key={equipment._id} sm={12} md={6} lg={4} >
                                <Equipment setCurrentId={setCurrentId} key={equipment._id} equipment={equipment}/>
                            </Col>)}
                        </Row>
                    </Col>
                    <Col md={3} xs={12}>
                        <EntryForm currentId={currentId} setCurrentId={setCurrentId} />
                    </Col>
                </Row>

        </Container>
    )
}

export default HomeScreen
