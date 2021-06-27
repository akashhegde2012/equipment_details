import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { fetchEquipments } from "./actions/action";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
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
          <Route path={'/'} exact component={HomeScreen} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
