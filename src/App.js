import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Guestuserdetails from './components/Guestuserdetails'
import Guestuserview from './components/Guestuserview'
import GuestuserEdit from './components/GuestuserEdit'
import Newuserlogin from './components/Newuserlogin'


const App = () => {
  return (
    <div>
      {/* <Guestuserdetails/> */}
      {/* <Guestuserview/>
    */}
    {/* <GuestuserEdit/> */}
     {/* <BrowserRouter>
   <Routes>
    <Route element={<Guestuserdetails/>}></Route>
    <Route element={<Guestuserview/>}></Route>
    <Route element={<GuestuserEdit/>}></Route>
    </Routes>
    </BrowserRouter> */}
<Newuserlogin/>
    </div>  
  )
}

export default App

