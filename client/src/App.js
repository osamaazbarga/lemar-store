import React from 'react';

import './App.css';

import { Route } from 'react-router';
import { Routes,Outlet} from 'react-router-dom';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import AdminRoute from './pages/admin/AdminRoute'
import RoutesFile from './pages/RoutesFile';
import Header from './components/nav/Header/Header';
import AdminHeader from './components/navAdmin/Header/AdminHeader';
import AdminDashbord from './pages/admin/AdminDashbord';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function AdminLayout() {
  return( 
  <>
  <AdminHeader/>
  <Outlet />
  </>
  )
}



function App() {


  
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasicLayout/>}>
          <Route index element={<Home/>}/>
          <Route exact path="login" element={<Login/>}/>
          <Route exact path="register" element={<Register/>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashbord/>}/>
        </Route>
      </Routes>

      {/* <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes> */}
      {/* <AdminRoute/>
      <RoutesFile/> */}
      
    </div>
  );
}

export default App;
