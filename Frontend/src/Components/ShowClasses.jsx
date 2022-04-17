import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Button from '@mui/material/Button';
import {  useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getClass } from '../Redux/classes/action';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ShowClasses() {
  const {id,name}=useParams()
  
  const navigate=useNavigate()
     
      
       
    const {classes } = useSelector((state) => state.class);
  
  
  let c=classes.filter((e)=>{
   return e.teacher==id
  })
  
  return (<div className="text-center flex-col flex gap-4">
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 ,width:"80%" ,margin:"auto",marginTop:"40px" }}   aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Teacher Name</StyledTableCell>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center" >Section</StyledTableCell>
            <StyledTableCell align="center" >Subject</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {c.map((row) => (
            <StyledTableRow key={row._id}>
            
          
              <StyledTableCell align="center">{name}</StyledTableCell>
              <StyledTableCell align="center">{row.grade}</StyledTableCell>
              <StyledTableCell align="center">{row.subject}</StyledTableCell>
              <StyledTableCell align="center">
              {row.subject}
              
    
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    

      
    </TableContainer>
    <div className="w-[50%] m-auto">
    <Button variant="contained"  
      

    onClick={()=>{
      navigate("/")
    }}>Back to DashBoard</Button>
    </div>
    </div>

  );
}
