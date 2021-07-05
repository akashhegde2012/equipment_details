import {configureStore,createSlice} from '@reduxjs/toolkit';
const initialState = {
    equipments:[]
};
const equipmentSlice = createSlice({
    name:'equipments',
    initialState:initialState,
    reducers:{
        getEquipments(state,action){
            state.equipments=action.payload;
        },
        putEquipments(state,action){
            state.equipments=[...state.equipments,action.payload];
        },
        changeEquipments(state,action){
            state.equipments=state.equipments.map(equipment=> equipment._id === action.payload._id?action.payload:equipment);
        },
        removeEquipments(state,action){
            state.equipments=state.equipments.filter(equipment=>equipment._id!==action.payload);
        }
    }
});
const store = configureStore({
    reducer:equipmentSlice.reducer
});
export const equipmentAction = equipmentSlice.actions;
export default store;