import React, { useState } from "react";
import Box from "@mui/material/Box";
import classes from "./SearchBook.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBook = () => {
  const [enteredBook, setEnteredBook] = useState("");
  const enteredBookChangeHandler = (event) => {
    setEnteredBook(event.target.value);
  };

  return (
    <Box>
      <Paper
        elevation="6"
        component="form"
        sx={{
          m: "10px",
          display: "flex",
          alignItems: "center",
          height: "45px",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: 0, m: 0, height: 45, width: 45 }}
          disable
        >
          <SearchIcon fontSize="inherit" />
        </IconButton>
        <Divider sx={{ height: 35 }} orientation="vertical" />
        <InputBase
          sx={{ ml: "5px", width: "80%" }}
          placeholder="Search Books Chat"
          // onChange={}
        />
      </Paper>
      <Divider sx={{ mb: 0 }} />
    </Box>
  );
};

export default SearchBook;
