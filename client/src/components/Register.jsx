import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: ""
  })
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    // console.log(register);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submited");

    // sending data of user to the backend
    axios.post("http://localhost:4000/user",register).then((res) => {
      // checking res is true or not
      // if res is true then send the user to login page directly
      if (res.data) history.push("/login");
    })

    // after submission of form, making the input box empty
    setRegister({
      name: "",
      age: "",
      gender: "",
      email: "",
      password: ""
    })
  }

  return (
    <div>
      <br />
      <Card style={{ width: 335, margin: "auto" }}>
        <h2 style={{ width: 100, margin: "auto", color: "gray" }}>SIGNUP</h2>
        <CardContent>
          <form action=""  onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name='name' type="text" value={register.name} onChange={(e) => { handleChange(e) }} label="Name" variant="outlined" style={{ width: 300 }} /><br /><br />
            <TextField id="outlined-basic" name='age' type="number" value={register.age} onChange={(e) => { handleChange(e) }} label="Age" variant="outlined" style={{ width: 300 }} /><br /><br />
            <TextField id="outlined-basic" name='gender' type="text" value={register.gender} onChange={(e) => { handleChange(e) }} label="Gender" variant="outlined" style={{ width: 300 }} /><br /><br />
            <TextField id="outlined-basic" name='email' type="text" value={register.email} onChange={(e) => { handleChange(e) }} label="Email" variant="outlined" style={{ width: 300 }} /><br /><br />
            <TextField id="outlined-basic" name='password' type="text" value={register.password} onChange={(e) => { handleChange(e) }} label="Password" variant="outlined" style={{ width: 300 }} /><br /><br />
            <Button variant="outlined" type="submit">SIGNUP</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register