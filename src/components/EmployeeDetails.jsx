import React, { useState } from 'react'

import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const EmployeeDetails = () => {

  var [employee,setemployee]=useState({"idd":'',"ename":'',"eage":'',"eadress":'',"estatus":''})

  // const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setemployee((employee)=>({...employee,[name]:value}))
      console.log(employee)
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
      <h1>Employee Details</h1>
      <TextField  label="ID" variant="filled" name="idd" value={employee.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={employee.ename}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="eage" value={employee.eage}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Adress" variant="filled" name="eadress" value={employee.eadress}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Status" variant="filled" name="eactive" value={employee.estatus}  onChange={inputhandler} /><br/><br/>
      
      <br/><br/>
      <Button variant="contained" >SUBMIT</Button>
    </div>
    </div>
  )
}

export default EmployeeDetails;