import React from "react";
import BookSearch from "./components/BookSearch";
import BookFilter from "./components/BookFilter";
import BookItem from "./components/BookItem";
import Pagination from "@mui/material/Pagination";
import { Grid, Box } from "@mui/material";
function Books() {
  return (
    <React.Fragment>
      <style>
        {`.MuiPagination-root button {background-color: #d0e1f9; color:white} 
          .MuiPagination-root button:hover{background-color: #283655;} 
          .MuiPagination-root .Mui-selected{background-color: #4d648d !important}`}
      </style>
      <BookSearch />
      <BookFilter />
      <Grid container sx={{ mt: "30px" }}>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"BUY"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"SELL"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"BUY"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"SELL"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"BUY"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"SELL"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"BUY"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"SELL"} />
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={6} sx={{ px: "20px", mb: "50px" }}>
          <BookItem btnLabel={"BUY"} />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination count={10} sx={{ mb: "30px" }} />
      </Box>
    </React.Fragment>
  );
}

export default Books;
