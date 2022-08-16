import React from 'react'
import { Route } from 'react-router';
import { Routes} from 'react-router-dom';
import AdminDashbord from './AdminDashbord'

const AdminRoute = () => {
  return (
    <div>

    <Routes>
      <Route exact path="/admin" element={<AdminDashbord/>}/>
    </Routes>
    </div>
  )
}

export default AdminRoute