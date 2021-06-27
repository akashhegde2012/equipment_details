import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteEquipments} from '../actions/action';
const Equipment = ({equipment}) => {
    const dispatch = useDispatch();
    const deleteHandler = ()=>{
        dispatch(deleteEquipments(equipment._id))
    }
    return (
        <Card className='my-3 p-3 rounded'>
            <Link  to={`/Equipment/${equipment._id}`}>
                <Card.Img  src={equipment.image} height={200} variant = 'top'/>
            </Link>
            <Card.Body>
                <Link to={`/Equipment/${equipment._id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {equipment.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as ='h4'>{equipment.category}</Card.Text>
                <Button onClick={deleteHandler} className='btn-block' type='button'>
                <i className="fas fa-trash"></i>&nbsp;Delete
                </Button>
            </Card.Body>
            
        </Card>
    )
}

export default Equipment

