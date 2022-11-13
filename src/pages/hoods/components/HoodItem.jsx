import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatIcon from "@mui/icons-material/Chat";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TitleIcon from "@mui/icons-material/Title";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Typography, Tooltip, Zoom, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import BookImg from "./book-img.jpg";
import Spring from "./spring.png";
import "./HoodItem.css";
function HoodItem({ btnLabel }) {
  const navigate = useNavigate();
  function handleClick() {
    if (btnLabel === "CONNECT") {
      navigate("/connected-hoods/17ssd8saxbKlA9");
    } else if (btnLabel === "CONNECTIONS") {
      navigate("/requested-hoods/17ssd8saxbKlA9");
    } else if (btnLabel === "OPEN CHAT") {
      navigate("/received-hoods/17ssd8saxbKlA9");
    }
  }
  return (
    <Grid
      container
      sx={{
        boxShadow: "4px 3px 4px 3px rgba(77, 100, 141, 0.3)",
        mb: "-10px",
        borderRadius: "5px",
        backgroundColor: "#d0e1f945",
      }}
      className="hood-container"
    >
      <img src={Spring} alt="" className="hood-spring" />
      <Grid item lg={5} xs={5} sm={5} md={5} sx={{ height: "270px" }}>
        <img
          src={BookImg}
          alt="book-img"
          height="270px"
          width="100%"
          className="hood-img"
        />
      </Grid>
      <Grid item lg={6} xs={6} sm={6} md={6}>
        <Tooltip
          title="PUCIT, Anarkali Bazar، Anarkali Bazaar Lahore, Pakistan"
          arrow
          TransitionComponent={Zoom}
          TransitionProps={{ timeout: 400 }}
        >
          <Divider
            sx={{
              mt: "7px",
              "&::before, &::after": { borderColor: "#283655" },
              width: "100%",
            }}
          >
            <Chip
              avatar={
                <Avatar
                  className="hood-owner-chip"
                  alt="Aqib Amin"
                  src=""
                  sx={{
                    backgroundColor: "#4d648d",
                  }}
                />
              }
              label="Aqib Amin"
              variant="outlined"
              sx={{
                backgroundColor: "#d0e1f9",
                borderColor: "#4d648d",
                color: "#283655",
                fontSize: "14px",
              }}
            />
          </Divider>
        </Tooltip>
        <Grid container sx={{ mt: "5px" }}>
          <Grid item lg={2} xs={2} sm={2} md={2}>
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "#4d648d",
              }}
            >
              <TitleIcon fontSize="small" />
            </Avatar>
          </Grid>
          <Grid item lg={10} xs={10} sm={10} md={10} sx={{ my: "auto" }}>
            <Typography
              sx={{
                fontSize: "12px",
                pl: "5px",
                color: "#283655",
                maxHeight: "34px",
                overflowY: "hidden",
              }}
            >
              Advanced Web Development with React.
            </Typography>
          </Grid>
        </Grid>
        <Divider
          orientation="vertical"
          sx={{
            height: "15px",
            width: "1px",
            ml: "14px",
            mb: "3px",
            backgroundColor: "#4d648d",
            borderRadius: "1px",
          }}
        />
        <Grid container>
          <Grid item lg={2}>
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "#4d648d",
              }}
            >
              <BorderColorIcon fontSize="small" />
            </Avatar>
          </Grid>
          <Grid item lg={10} sx={{ my: "auto" }}>
            <Typography sx={{ fontSize: "13px", pl: "5px", color: "#283655" }}>
              Mehul Mohan.
            </Typography>
          </Grid>
        </Grid>
        <Divider
          orientation="vertical"
          sx={{
            height: "15px",
            width: "1px",
            ml: "14px",
            mb: "3px",
            mt: "3px",
            backgroundColor: "#4d648d",
            borderRadius: "1px",
          }}
        />
        <Grid container>
          <Grid item lg={2}>
            <Avatar
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "#4d648d",
              }}
            >
              <LocalOfferIcon fontSize="small" />
            </Avatar>
          </Grid>
          <Grid item lg={10} sx={{ my: "auto" }}>
            <Typography sx={{ fontSize: "14px", pl: "5px", color: "#283655" }}>
              1500 Rs.
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{
            mt: "5px",
            "&::before, &::after": { borderColor: "#283655" },
          }}
        >
          <Chip
            label="2 Connections"
            sx={{
              backgroundColor: "#d0e1f9",
              color: "#283655",
              fontSize: "15px",
            }}
          />
        </Divider>
        <Button
          className="connect-btn"
          sx={{ mt: "10px", width: "100%" }}
          onClick={handleClick}
          startIcon={
            btnLabel === "OPEN CHAT" ? (
              <ChatIcon />
            ) : (
              <ConnectWithoutContactIcon />
            )
          }
          variant="contained"
        >
          {btnLabel}
        </Button>
      </Grid>
    </Grid>
  );
}

export default HoodItem;
