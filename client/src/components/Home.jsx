import React, { useContext } from 'react'
import { contexthook } from './Userdetail'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Home = () => {
  const { context } = useContext(contexthook);
  // console.log("context", context.obj);
  return (
    <div>
      <br/>
      <Card style={{ width: 335, margin: "auto" }}>
        <CardContent>
          <div style={{display:"flex",justifyContent: "space-between",color: "#90A4AE"}}>
            <div>NAME: </div>
            <div>{context["obj"].name}</div>
          </div>
          <div style={{display:"flex",justifyContent: "space-between",color: "#90A4AE"}}>
            <div>AGE: </div>
            <div>{context["obj"].age}</div>
          </div>
          <div style={{display:"flex",justifyContent: "space-between",color: "#90A4AE"}}>
            <div>GENDER: </div>
            <div>{context["obj"].gender}</div>
          </div>
          <div style={{display:"flex",justifyContent: "space-between",color: "#90A4AE"}}>
            <div>EMAIL:</div>
            <div>{context["obj"].email}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home