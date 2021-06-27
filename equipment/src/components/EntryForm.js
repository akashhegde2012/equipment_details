import { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createEquipments } from "../actions/action";


const EntryForm = (props)=>{
    const nameRef = useRef(null);
    const categoryRef = useRef(null);
    const descriptionRef = useRef(null);
    const [image,setImage]=useState();
    const dispatch = useDispatch()
    const fileChangeHandler= async(e)=>{
        let file = e.target.files[0];
        const convert = await base64(file);
        setImage(convert);
    }
    const base64 = (file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload=()=>{
                resolve(fileReader.result);
            }
            fileReader.onerror=(error)=>{
                reject(error);
            }
        })
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(nameRef,descriptionRef,categoryRef);
        const equipment = {
            name:nameRef.current.value,
            category:categoryRef.current.value,
            description:descriptionRef.current.value,
            image:image
        }
        dispatch(createEquipments(equipment));
    }
    return (
        <Container className='form_container'>
            <Form onSubmit={submitHandler}>
            <p>Enter A New Equipment</p>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control ref={nameRef} type='text' placeholder='enter name of equipment' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control ref={categoryRef} type = 'text' placeholder='Enter the category of Equipment' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control ref={descriptionRef} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.File onChange={fileChangeHandler} id="exampleFormControlFile1" label="Image of Equipment" />
                </Form.Group>
                <Button variant='primary' type='submit' >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default EntryForm;