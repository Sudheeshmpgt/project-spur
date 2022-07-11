import React, { useEffect, useState } from "react";
import {
  Box,
  Fab,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Pagination,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "../../../axiosinstance";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "../../Sweetalert/sweetAlert";
import { useSelector } from "react-redux";
import RateReviewIcon from "@mui/icons-material/RateReview";
import dayjs from "dayjs";
import "../../common/Scroll.css";

function ManageInterview() {
  const user = useSelector((state) => state.userData.value);
  const [request, setRequest] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const [view, setView] = useState([])
	const [page, setPage] = useState(1)
	const pageItems = 5
	const pageCount = Math.ceil(request.length / pageItems)

  useEffect(() => {
		setView(
			request.slice(
				(page - 1) * pageItems,
				(page - 1) * pageItems + pageItems
			)
		)
	}, [request])

	useEffect(() => {
		setView(
			request.slice(
				(page - 1) * pageItems,
				(page - 1) * pageItems + pageItems
			)
		)
	}, [page])

	const handlePageChange = (event, value) => {
		setPage(value)
	}

  const handleCloseClick = () => {
    navigate("/home");
  };

  const handleStatusChange = (e, id) => {
    setStatus(e.target.value);
        const values = {
          status: e.target.value, 
          interviewerId: user._id
        }
        axios.put(`api/interview/interviewer/status/${id}`, values, {
          headers: {
            authToken: localStorage.getItem("usertoken"),
          },
        })
        .then((res)=>{
          setRequest(res.data.requests);
        })
  };

  useEffect(() => {
    axios
      .get(`api/interview/${user._id}`, {
        headers: {
          authToken: localStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        setRequest(res.data.requests);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong",
        });
      });
  }, [user]);

  const addReview = () => {
    return (
      <Fab variant="contained" size="small" color="primary">
        <RateReviewIcon sx={{ fontSize: 23 }} />
      </Fab>
    );
  };

  return (
    <Grid container>
      <Box
        component={Paper}
        width="95%"
        height={550}
        marginTop={10}
        borderRadius="10px"
      >
        <Box
          sx={{
            borderBottom: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.38)",
            minHeight: "35px",
            maxWidth: "96%",
            m: "0 auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontSize={{ xs: "1rem", sm: "1.3rem" }}
            sx={{ mt: 2, mb: 1 }}
          >
            Manage Interviews
          </Typography>
          <IconButton onClick={handleCloseClick}>
            <CloseIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Box>
        <TableContainer
          className="scrollbar-hidden"
          component={Paper}
          style={{
            width: "95%",
            margin: "20px auto",
            height: 450,
            overflow: "scroll",
          }}
        >
          <Table sx={{ width: 1011 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#0037ff6e" }}>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone No.</TableCell>
                <TableCell align="center">About</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Report</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {view.map((data, index) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ width: 40 }}>
                    {index + 1}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.9rem", width: 130 }}
                  >
                    {data.userId.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.9rem", width: 95 }}
                  >
                    {data.userId.phone}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.9rem", width: 130 }}
                  >
                    {data.userId.about}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.9rem", width: 100 }}
                  >
                    {dayjs(data.date).format("MMM DD YYYY")}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "0.9rem", width: 100 }}
                  >
                    {dayjs(data.time).format("hh:mm a")}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ minWidth: 100 }}>
                      {
                        data?.status === "Cancelled" ? (
                          <Typography fontSize='1.1rem' color='error'>
                            {data?.status}
                          </Typography>
                        ):(
                      <TextField
                        name="status"
                        label="Status"
                        select
                        value={data.status ? data.status : status}
                        onChange={(e) => {
                          handleStatusChange(e, data._id);
                        }}
                        fullWidth
                      >
                        <MenuItem value="Booked">Confirmed</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                      </TextField>
                        )
                      }
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <RateReviewIcon sx={{ fontSize: 25, color: "green" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
						count={pageCount}
						onChange={handlePageChange}
						color="primary"
					/>
        </TableContainer>
      </Box>
    </Grid>
  );
}

export default ManageInterview;
