import React from "react";
import Navbar from "./Navbar";
import Home from '../Home/Home'
import Men from '../Men/Men';
import Women from '../Women/Women';
import NewArrival from '../NewArrivals/NewArrivals'
import Cart from '../Cart/Cart';
import { Routes, Route } from "react-router-dom";

export const AllRoutes = ()=>{
    return <>
    <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/men" element={<Men/>}></Route>
                <Route path="/women" element={<Women/>}></Route> 
                <Route path="/new" element={<NewArrival/>}></Route> 
                <Route path="/cart" element={<Cart/>}></Route>  
                {/* <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/singleproducts" element={<SingleProduct/>}></Route>  
                <Route path="/paymentpage" element={<Payment/>}></Route>  
                <Route path="/checkout" element={< Checkout/>}></Route>  
                <Route path="/summary" element={<Summary/>}></Route>   */}
            </Routes>
    </>
}