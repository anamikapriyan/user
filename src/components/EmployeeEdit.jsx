// import { Button, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react'

// const EmployeeEdit = (props) => {
   
//         var[employee,setEmployee]=useState(props.data)
    
//     // const navigate =useNavigate();
    
    
//     const employeehandler =(event)=>{
//         const {name,value}=event.target
//         setEmployee((employee)=>({...employee,[name]:value}))
//         console.log(employee)
//     }  
//     //  const saveData =()=>{
        
//     //     if
//     //     (props.method==="put")
//     //     {
//     //         // axios.put("http://localhost:4005/employeeedit/"+employee._id,employee)
//     //         .then((response)=>{
//     //             alert("updated")
//     //             window.location.reload(false)
//     //         })
//     //         .catch(err=>console.log(err))
//     //     }
//     //  }
     
//   return (
//     <div>
//     <div className='div'>
//       <h1>Employee  Status</h1>
//       <TextField  label="ID" variant="filled" name="id" value={employee.idd} onChange={employeehandler}/><br/><br/>
//       <TextField  label="name" variant="filled" name="ename" value={employee.ename}  onChange={employeehandler}/><br/><br/>
//       <TextField  label="Age" variant="filled" name="age" value={employee.eage}  onChange={employeehandler} /><br/><br/>
//       <TextField  label="Address" variant="filled" name="remarks" value={employee.eadress}  onChange={employeehandler} /><br/><br/>
//       Status: &nbsp;&nbsp;
//       <select name="status" value={employee.status}  onChange={employeehandler}>
//        <option value="ACTIVE">ACTIVE</option>
//        <option value="INACTIVE">INACTIVE</option>
//       </select>
//       <br/><br/>
//       <Button variant="contained" >SUBMIT</Button>
//     </div>
// </div>

//   )
// }

// export default EmployeeEdit