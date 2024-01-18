import React, { useState } from 'react'

import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const Guestuserdetails = () => {

  var [guestuser,setguestuser]=useState({"idd":'',"ename":'',"eage":'',"eaddress":'',"estatus":''})

  // const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.guestuser
      setguestuser((guestuser)=>({...guestuser,[name]:value}))
      console.log(guestuser)
  }
  
  // const savedata =(event) =>{
  //   event.preventDefault();
  //   axios.post("http://localhost:4005/new/",employee)
  //   .then((response) =>{
  //   alert("Record Saved")
  //   navigate('/TrainingView')
  //   })
  //   .catch(err=>console.log(err))
  //   }
  return (
    <div align="center">
      <div className='div'>
      <h1>Guestuser Details</h1>
      <TextField  label="ID" variant="filled" name="idd" value={guestuser.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={guestuser.ename}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="eage" value={guestuser.eage}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Address" variant="filled" name="eaddress" value={guestuser.eaddress}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Status" variant="filled" name="eactive" value={guestuser.estatus}  onChange={inputhandler} /><br/><br/>
      
      <br/><br/>
      <Button variant="contained" >SUBMIT</Button>
    </div>
    </div>
  )
}

export default Guestuserdetails;