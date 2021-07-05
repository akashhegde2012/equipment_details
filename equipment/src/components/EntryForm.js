import { useEffect,  useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createEquipments,updateEquipments } from "../actions/action";


const EntryForm = ({currentId,setCurrentId})=>{
    // const nameRef = useRef(null);
    // const categoryRef = useRef(null);
    // const descriptionRef = useRef(null);
    // const [image,setImage]=useState();
    const [equipmentData,setEquipmentData]=useState({
        name:'',category:'',description:'',image:''
    })
    const dispatch = useDispatch()
    const fileChangeHandler= async(e)=>{
        let file = e.target.files[0];
        const convert = await base64(file);
        // setImage(convert);
        setEquipmentData({...equipmentData,image:convert});
    }
    const equipment = useSelector(state=> currentId?state.equipments.find((e)=>e._id === currentId):equipmentData);
    useEffect(()=>{
        if(equipment)
        setEquipmentData(equipment);
    },[equipment])
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
        // console.log(nameRef,descriptionRef,categoryRef);
        // const equipment = {
        //     name:nameRef.current.value,
        //     category:categoryRef.current.value,
        //     description:descriptionRef.current.value,
        //     image:image
        // }
        if(currentId){
            dispatch(updateEquipments(currentId,equipmentData))
        }
        else{
            dispatch(createEquipments(equipmentData));
        }
        clearHandler();
    }
    const clearHandler = ()=>{
        setCurrentId(null);
        setEquipmentData({
            name:'',category:'',description:'',image:''
        });
    }
    return (
        <Container className='form_container'>
            <Form onSubmit={submitHandler}>
            <p>{currentId?'Editing '+equipment.name:'Enter Equipment'}</p>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={equipmentData.name} type='text' placeholder='enter name of equipment' onChange={(e)=>{setEquipmentData({...equipmentData,name:e.target.value})}}   />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control value={equipmentData.category}   type = 'text' placeholder='Enter the category of Equipment' onChange={(e)=>{setEquipmentData({...equipmentData,category:e.target.value})}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control value={equipmentData.description}   as="textarea" rows={3} onChange={(e)=>{setEquipmentData({...equipmentData,description:e.target.value})}}  />
                </Form.Group>
                <Form.Group>
                    <Form.File onChange={fileChangeHandler} id="exampleFormControlFile1" label="Image of Equipment" />
                </Form.Group>
                <button type='button' className='btn btn-warning' onClick={clearHandler}>Clear</button>
                <Button variant='primary' type='submit' >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default EntryForm;