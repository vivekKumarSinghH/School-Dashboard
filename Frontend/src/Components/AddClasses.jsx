
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getSortTeacher, getTeacher } from "../Redux/User/action";
import { postClass } from "../Redux/classes/action";
import { useNavigate } from "react-router";

export default function AddClasses() {
  const [data, setData] = React.useState({
    grade: "",
    section: "",
    subject: "",
    teacher: ""
  });
  
  const dispatch = useDispatch();
const navigate=useNavigate()
React.useEffect(()=>{

  dispatch(getSortTeacher( { age: 0, gender: 0, page: `?size=100` }))
},[])


  const {teachers}=useSelector((state)=>state.teacher)

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
      <p className=" ">Add Classes</p>
      <TextField
        id="outlined-basic"
        label="Grade"
        variant="outlined"
        value={data.grade}
        type="text"
        onChange={(e) => {
          setData({ ...data, grade: e.target.value });
        }}
      />
      
      <TextField
        id="outlined-basic"
        label="Section"
        variant="outlined"
        value={data.section}
        type="text"
        onChange={(e) => {
          setData({ ...data, section: e.target.value });
        }}
      />

      <TextField
      id="outlined-basic"
      label="Subject"
      variant="outlined"
      type="text"
      value={data.subject}
      onChange={(e) => {
        setData({ ...data, subject: e.target.value });
      }}
    />

      <TextField
        id="outlined-select-currency"
        select
        label="Select Teacher"
        value={data.teacher}
        onChange={(e) => {
          setData({ ...data, teacher: e.target.value });
        }}
      >
        {
            
            teachers.map((option) => (
          <MenuItem value={option._id} key={option._id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
      


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
          dispatch(postClass(data));
          
          setData({
            grade: "",
            section: "",
            subject: "",
            teacher: ""
          });
          navigate(`/`)
        }}
      >
       Add class
      </Button>{" "}
    </Box>
  );
}
