import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  adminLogout,
  getOneTeacher,
  getSortTeacher,
  getTeacher,
} from "../Redux/User/action";
import GetClassbyTeacher from "./GetClassbyTeacher";
import { useNavigate } from "react-router";
import { getClass } from "../Redux/classes/action";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShowData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getTeacher());
   
     
      dispatch(getClass())
 
  }, []);

  const { teachers, page,singleteacher } = useSelector((state) => state.teacher);

  let arr = [];
  for (let i = 1; i <= page; i++) {
    arr[i] = i;
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [t, st] = React.useState("");
  return (
    <div className="text-center flex-col flex gap-4">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Searched User is:
           <img
           src={singleteacher.image_url}
           alt="profile picture"
           className="w-[60px] h-[60px] m-auto rounded-full"
         />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
<p>Name:{singleteacher.name}</p>
<p>Age:{singleteacher.age}</p>
<p>Gender:{singleteacher.gender}</p>
          </Typography>
        </Box>
      </Modal>

      <div className=" text-center flex h-14 gap-2 w-[30%] m-auto mt-4">
        <TextField className="flex-6"
          label="Enter Teacher Name"
          value={t}
          onChange={(e) => {
            st(e.target.value);
          }}
          type="text"
          color="secondary"
          focused
        />

        <Button className="flex-2"
          variant="contained"
          onClick={() => {
            dispatch(getOneTeacher({ name: t }));
            handleOpen()
          }}
        >
          Search Teacher
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 700,
            width: "80%",
            margin: "auto",
            marginTop: "40px",
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Profile Picture</StyledTableCell>
              <StyledTableCell align="center">Teacher Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">
                Total No. of classes
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">
                  <img
                    src={row.image_url}
                    alt="profile picture"
                    className="w-[60px] h-[60px] m-auto rounded-full"
                  />
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={() => {
                    navigate(`/class/${row._id}/${row.name}`);
                  }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell align="center">
                  <GetClassbyTeacher id={row._id} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex gap-4 m-auto mt-[20px]">
        <Button
          variant="contained"
          onClick={() => {
            dispatch(getSortTeacher({ age: 1, gender: 0, page: "?page=1" }));
          }}
        >
          Sort Low To High
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            dispatch(getSortTeacher({ age: -1, gender: 0, page: "?page=1" }));
          }}
        >
          Sort high to low
        </Button>
      </div>

      <div className="flex gap-4 m-auto mt-[20px]">
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              getSortTeacher({ age: 0, gender: "male", page: "?page=1" })
            );
          }}
        >
          Male Teacher
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              getSortTeacher({ age: 0, gender: "female", page: "?page=1" })
            );
          }}
        >
          Female teacher
        </Button>
      </div>

      <div className="flex gap-4 m-auto mt-[40px]">
        {arr.map((e) => {
          return (
            <Button
              key={e}
              variant="contained"
              onClick={() => {
                dispatch(
                  getSortTeacher({ age: 0, gender: 0, page: `?page=${e}` })
                );
              }}
            >
              {e}
            </Button>
          );
        })}


        
    
      </div>
      <div className="m-auto w-[10%] mt-4 mb-[50px]">
      <Button
    variant="contained"
    size="large"
    onClick={() => {
      dispatch(adminLogout())
      navigate(`/signup`)
    }}
  >
Logout
  </Button></div>
    </div>
  );
}
