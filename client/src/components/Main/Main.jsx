import React from "react";
import Landings from "./Landings";
// import {Route, Routes} from "react-router-dom";
// import Home from "../Home";
const Main = () => {

    return <main>
        <h1>Landings Asteroides</h1>
        <Landings />
        {/*<Routes>*/}
        {/*    <Route element={<Home/>} path='/'/>*/}
        {/*    <Route element={<Landings/>} path='/landings'/>*/}
        {/*     <Route element={<Neas/>} path='/neas'/>*/}
        {/*</Routes>*/}
    </main>;
};
export default Main;