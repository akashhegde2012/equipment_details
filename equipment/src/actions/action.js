import axios from 'axios';
import { equipmentAction } from '../store';
const url = '/equipments';
export const fetchEquipments = ()=> async (dispatch)=>{
    const response = await axios.get(url);
    dispatch(equipmentAction.getEquipments(response.data));
}
export const createEquipments = (equipment)=> async (dispatch)=>{
    const {data} = await axios.post(url,equipment);
    dispatch(equipmentAction.putEquipments(data));
}
export const deleteEquipments = (id)=>async(dispatch)=>{
    await axios.delete(`${url}/${id}`);
    dispatch(equipmentAction.removeEquipments(id));
}