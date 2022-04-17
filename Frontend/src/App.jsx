import React from 'react'

import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { Link } from 'react-router-dom'
import ShowData from './Components/ShowData'
import { useSelector } from 'react-redux'
import AddTeacher from './Components/AddTeacher'
import AddClasses from './Components/AddClasses'
import AdminLogin from './Components/Adminlogin'
import SignUp from './Components/AdminSignup'
import ShowClasses from './Components/ShowClasses'

function App() {
const {adminlogin}=useSelector((state)=>state.teacher)
  return (<div>
    <div  className="flex justify-around bg-black h-[50px] text-2xl items-center text-white">
    
    <Link to="/">Dashboard</Link>
    <Link to="/login">Log in</Link>
    <Link to="/addteacher">Add Teacher</Link>
    <Link to="/addclass">Add Classes</Link>
   
    </div>


<Routes>

<Route path="/" element={ adminlogin?<ShowData/>:<Navigate to="/signup"/>}/>
<Route path="/addteacher" element={ adminlogin?<AddTeacher/>:<Navigate to="/signup"/>}/>
<Route path="/addclass" element={ adminlogin?<AddClasses/>:<Navigate to="/signup"/>}/>
<Route path="/class/:id/:name" element={ adminlogin?<ShowClasses/>:<Navigate to="/signup"/>}/>
<Route path="/login" element={!adminlogin? <AdminLogin/>:<Navigate to="/"/>}/>
<Route path="/signup" element={ <SignUp/>}/>
</Routes>
    </div>

  )
}

export default App
