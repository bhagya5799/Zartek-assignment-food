import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Orders from './Components/Orders';
import { useState } from 'react';

function App() {
  const [order1,setOrders1]=useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home order1={order1} setOrders1 ={setOrders1 }/>} />
        <Route exact path='/orders' element={<Orders order1={order1} setOrders1={setOrders1} /> }  />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
