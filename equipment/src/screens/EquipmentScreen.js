import { Fragment, useEffect, useState } from "react";
import {  Col, Container, Image,  Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
const EquipmentScreen = ({match})=>{
    const equipments = useSelector(state=>state.equipments)
    const [equipment,setEquipments] = useState({});
    useEffect(()=>{
        setEquipments(equipments.find(p=> p._id === match.params.id));

    },[equipments,setEquipments,match])
    return (
        <Fragment>
            <Container className='details' >
                <Row lg={1}>

                    <Image height='600px'  src={equipment.image} alt='none' />
                    <Col>
                    <h3>
                        <p>Description:</p>
                        {equipment.description}
                    </h3>
                    </Col>
                </Row>
                <Link className='btn btn-primary' to='/'>Go back</Link>
            </Container>
        </Fragment>
    )
}
export default EquipmentScreen;