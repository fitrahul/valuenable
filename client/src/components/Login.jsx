import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { contexthook } from './Userdetail';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const { handleContext } = useContext(contexthook);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
    // console.log(login);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Logined");
    axios.post("http://localhost:4000/user/login", login).then((res) => {
      var data = res.data;
      handleContext(data.eml);
      // console.log();

      // if user exist then user are able to see there details on home page
      if (data) history.push("/home");
      // otherwise redirected to signup page
      else history.push("/signup")
    })
    setLogin({
      email: "",
      password: ""
    })
  }

  return (
    <div>
      <br />
      <Card style={{ width: 335, margin: "auto" }}>
        <h2 style={{ width: 100, margin: "auto", color: "gray" }}>LOGIN</h2>
        <CardContent>
          <form action="" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" name='email' type="text" value={login.email} onChange={(e) => { handleChange(e) }} label="Email" variant="outlined" style={{ width: 300 }} /><br /><br />
            <TextField id="outlined-basic" name='password' type="text" value={login.password} onChange={(e) => { handleChange(e) }} label="Password" variant="outlined" style={{ width: 300 }} /><br /><br />
            <Button variant="outlined" type="submit">LOGIN</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login