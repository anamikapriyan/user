import { TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';

const Newuserlogin = () => {
  const [newuser, setnewuser] = useState({
    "ename": '',
    "idd": '',
    "enumber": '',
    "equalification": '',
    "egender": '',
    "eexperience": '',
    "edob": '',
    "enationality": '',
    "eaddress": '',
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setnewuser((newuser) => ({ ...newuser, [name]: value }));
    console.log(newuser);
  };

  const handleGenderChange = (event) => {
    setnewuser((newuser) => ({ ...newuser, 'egender': event.target.value }));
  };

  return (
    <div className='div' align="center">
      <h1>New User Login</h1>

      <TextField label="Name" variant="filled" name="ename" value={newuser.ename} onChange={inputhandler} /><br /><br />
      <TextField label="ID" variant="filled" name="idd" value={newuser.idd} onChange={inputhandler} /><br /><br />
      <TextField label="Contact Number" variant="filled" name="enumber" value={newuser.enumber} onChange={inputhandler} /><br /><br />
      <TextField label="Qualification" variant="filled" name="equalification" value={newuser.equalification} onChange={inputhandler} /><br /><br />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span>Gender:</span>
        <RadioGroup row name="egender" value={newuser.egender} onChange={handleGenderChange}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="transgender" control={<Radio />} label="Other" />
        </RadioGroup>
      </div>

      <TextField label="Experience" variant="filled" name="eexperience" value={newuser.eexperience} onChange={inputhandler} /><br /><br />
      <TextField label="Nationality" variant="filled" name="enationality" value={newuser.enationality} onChange={inputhandler} /><br /><br />
      <TextField label="Address" variant="filled" name="eaddress" value={newuser.eaddress} onChange={inputhandler} /><br /><br />
    </div>
  );
};

export default Newuserlogin;
