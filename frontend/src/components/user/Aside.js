import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosinstance"

function Aside() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userData.value);
  const [name, setName] = useState("");

  const [postCount, setPostCount] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (!token) {
      navigate("/");
    } else {
      const name = localStorage.getItem("userName");
      setName(name);
    }
  }, [navigate]);

  useEffect(() => {
      const getPostData = () => {
          axios.get(`api/post/posts/${user._id}`, {
            headers: {
              authToken: localStorage.getItem("usertoken"),
            },
          })
          .then((res)=>{
            setPostCount(res.data.postsCount)
          })
        };

        const getUpcommingData = () => {
          axios.get(`api/interview//user/upcomming/${user._id}`, {
            headers: {
              authToken: localStorage.getItem("usertoken"),
            },
          })
          .then((res)=>{
            setPending(res.data.pendingCount)
            setCompleted(res.data.completedCount)
          })
        };

        getPostData();
        getUpcommingData();
  },[user]) 

  const handleClickNotification = () => {
    navigate('/notifications')
  }

  const handleClickUpcomming = () => {
    navigate('/upcomming')
  }

  

  return (
    <Grid container>
      <Box width="100%">
        <Paper
          sx={{
            m: "80px auto",
            elevalation: 10,
            borderRadius: "15px",
            width: "72%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 480,
              backgroundColor: "secondary.main",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 80,
                backgroundColor: "white",
                borderRadius: "15px 15px 0 0",
              }}
            ></Box>
            <Paper sx={{ width: 120, m: "0 auto", borderRadius: 15 }}>
              <Avatar
                src={user && user.profileImg}
                sx={{ width: 120, height: 120, m: "-55px auto", elevation: 10 }}
              />
            </Paper>
            <Box
              width="90%"
              borderBottom={1}
              borderColor="rgba(0, 0, 0, 0.38)"
              m="0 auto"
            >
              <Typography
                fontSize={{ sm: "1.1rem" }}
                fontWeight={600}
                mt="60px"
                textAlign="center"
                fontFamily="Poppins, sans-serif"
              >
                {user.name ? user.name : name}
              </Typography>
              <Typography
                fontSize={{ sm: "0.9rem" }}
                color="#757575"
                textAlign="center"
                mb={1}
              >
                {user && user.about}
              </Typography>
            </Box>
            <Box
              width="90%"
              borderBottom={1}
              borderColor="rgba(0, 0, 0, 0.38)"
              m="0 auto"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography fontSize={{ sm: "1rem" }} mt={2}>
                  Networks
                </Typography>
                <Typography fontSize={{ sm: "1rem" }} mt={2}>
                  {user?.connections?.length}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography fontSize={{ sm: "1rem" }} mt={1}>
                  Posts
                </Typography>
                <Typography fontSize={{ sm: "1rem" }} mt={1}>
                  {postCount}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography fontSize={{ sm: "1rem" }} mt={1}>
                  Interviews
                </Typography>
                <Typography fontSize={{ sm: "1rem" }} mt={1}>
                  {completed}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography fontSize={{ sm: "1rem" }} mt={1} mb={1.5}>
                Pending Requests
                </Typography>
                <Typography fontSize={{ sm: "1rem" }} mt={1} mb={1.5}>
                  {pending}
                </Typography>
              </Box>
            </Box>
            <Box width="90%" m="0 auto">
              <Box
                sx={{
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography onClick={handleClickNotification} fontSize={{ sm: "1rem", cursor: "pointer" }} mt={2}>
                  Notifications
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  m: "0 auto",
                }}
              >
                <Typography
                 onClick = {handleClickUpcomming}
                  fontSize={{ sm: "1rem", cursor: "pointer" }}
                  mt={1}
                  mb={1.5}
                >
                  Upcomming
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}

export default Aside;
