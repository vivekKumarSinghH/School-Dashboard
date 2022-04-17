import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { postUser } from "../Redux/User/action";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    gender: "",
    role: "",
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
      <p className=" ">Admin Sign up</p>
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
        id="outlined-select-currency"
        select
        label="Select Gender"
        value={data.gender}
        onChange={(e) => {
          setData({ ...data, gender: e.target.value });
        }}
      >
        {[
          { value: "male", key: 1 },
          { value: "female", key: 2 },
        ].map((option) => (
          <MenuItem value={option.value} key={option.key}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        value={data.age}
        type="number"
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select Role"
        value={data.role}
        onChange={(e) => {
          setData({ ...data, role: e.target.value });
        }}
      >
        {[
          { value: "teacher", key: 1 },
          { value: "admin", key: 2 },
        ].map((option) => (
          <MenuItem value={option.value} key={option.key}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
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
        onClick={() => {

            if(data.gender==""){
                delete data.gender
            }
            if(data.role==""){
                delete data.role
            }
          dispatch(postUser(data));
         
          setData({
            name: "",
            age: "",
            gender: "",
            role: "",
            password: "",
          });
          navigate(`/login`)
        }}
      >
        Sign up
      </Button>{" "}
    </Box>
  );
}
