import { useState,useEffect } from 'react';
import './App.css';
import Navigator from './Navigator';
import Home from './Home';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';
import {Route,Routes} from 'react-router-dom';

function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setProducts(res.data))
    .catch(e=>toast.error("something went wrong!"))
  },[])
  return (
    <div className="App">
      <ToastContainer/>
      <Navigator/>
      <Routes>
      <Home products={products}/>


      </Routes>
    </div>
  );
}

export default App;
