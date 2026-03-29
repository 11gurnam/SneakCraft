import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Login from "./pages/login";
import './App.scss'
import ProtectedRoute from "./component/common/protectedRoute";
import UserAccount from "./component/user/user-account/userAccount.view";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/my-account'} element={<ProtectedRoute>
                <UserAccount/>
            </ProtectedRoute>}/>
        </Routes>
    )
}

export default App
