import React, {useEffect, useState} from "react";
import Landings from "./Landings";
// import {Route, Routes} from "react-router-dom";
import Home from "../Home";
const Main = () => {

    return <main>
        <h1>La muerte no es el final, React si.</h1>
        <Landings />
        {/*<Routes>*/}
        {/*    <Route element={<Home/>} path='/'/>*/}
        {/*    <Route element={<Landings/>} path='/landings'/>*/}
        {/*    <Route element={<Neas/>} path='/neas'/>*/}
        {/*</Routes>*/}
    </main>;
};
export default Main;