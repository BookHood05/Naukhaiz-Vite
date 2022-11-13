import React from "react";
import HoodSearch from "./components/HoodSearch";
import HoodFilter from "./components/HoodFilter";
import HoodItem from "./components/HoodItem";
import Pagination from "@mui/material/Pagination";
import { Grid, Box } from "@mui/material";
function Hoods() {
  return (
    <React.Fragment>
      <style>
        {`.MuiPagination-root button {background-color: #d0e1f9; color:white} 
          .MuiPagination-root button:hover{background-color: #283655;} 
          .MuiPagination-root .Mui-selected{background-color: #4d648d !important}`}
      </style>

      <HoodSearch />
      <HoodFilter />
      <Grid container sx={{ mt: "30px" }}>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <HoodItem btnLabel={"CONNECT"} />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ mb: "30px" }} />
      </Box>
    </React.Fragment>
  );
}

export default Hoods;
