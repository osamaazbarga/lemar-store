import React from 'react'
import { Route } from 'react-router';
import { Routes} from 'react-router-dom';

import Home from './Home';
import Login from './auth/Login';
import Register from './auth/Register';

const RoutesFile = () => {
  return (
    <div>
      
    <Routes>
      
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
    </Routes>
    </div>
  )
}

export default RoutesFile