import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Loginlayout from './components/Loginlayout';
import Pagelayout from './components/Pagelayout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Category from './components/Category';
import Addcategory from './components/Addcategory';
import Product from './components/Product';
import Addproduct from './components/Addproduct';



function App() {
  return (
    <React.Fragment>
    <Routes>
        <Route path="/" element={<Loginlayout><Login/></Loginlayout>}></Route>
        <Route path="/home" element={<Pagelayout><Dashboard/></Pagelayout>}></Route>
        <Route path="/category" element={<Pagelayout><Category/></Pagelayout>}></Route>
        <Route path="/addCategory" element={<Pagelayout><Addcategory/></Pagelayout>}></Route>
        <Route path="/product" element={<Pagelayout><Product/></Pagelayout>}></Route>
        <Route path="/addProduct" element={<Pagelayout><Addproduct/></Pagelayout>}></Route>
    </Routes>
    </React.Fragment>
  );
}

export default App;
