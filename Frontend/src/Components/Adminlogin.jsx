import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { loginAdmin } from "../Redux/User/action";
import { useNavigate } from "react-router";

export default function AdminLogin() {
  const [data, setData] = React.useState({
    name: "",

    password: "",
  });

  const dispatch = useDispatch();
const navigate=useNavigate()
  return (
    <Box
      className=" w-fit justify-center text-center m-auto flex flex-col"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <p className=" ">Admin Login </p>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={data.name}
        type="text"
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />

          
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        value={data.password}
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <Button
        variant="outlined"
        size="large"
        disabled={!(data.name=="" ||data.password=="")?false:true
          
     }
        onClick={() => {

            
         
          dispatch(loginAdmin(data))
       
   
          
        
        }
      }
      >
    Log in
      </Button>




      <p>If you don't have Account go to sign up</p>
      <Button
      variant="outlined"
      size="large"
      onClick={() => {
    navigate(`/signup`)
      }}
    >
  Sign up 
    </Button>

      {" "}
    </Box>
  );
}
