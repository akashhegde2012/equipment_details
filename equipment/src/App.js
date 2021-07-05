import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { fetchEquipments } from "./actions/action";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EquipmentScreen from "./screens/EquipmentScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [currentId,setCurrentId]= useState(null);
  const dispatch=useDispatch();
  const equipment = useSelector(state=>state.equipments)
  useEffect(()=>{
    dispatch(fetchEquipments());

  },[dispatch]);
  console.log(equipment);
  return (
    <div className="App">
        <Header />
        <main className='py-3'>
          <Route path={'/'} exact >
            <HomeScreen currentId={currentId} setCurrentId={setCurrentId} />
          </Route>
          <Route path={'/Equipment/:id'} exact component={EquipmentScreen} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
