import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import "../components/HoodSearch.css";
function HoodSearch() {
  const [sortValue, setSortValue] = React.useState("Latest Added");

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };
  return (
    <Container sx={{ px: { lg: "3%", md: "0" }, width: "95%" }}>
      <div className="searchwrapper">
        <div className="searchbox">
          <Grid container>
            <Grid item xs={12} sm={5} md={8} className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Title, ISBN, Author"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} className="col-md-3">
              <Select
                className="form-control sort-select"
                value={sortValue}
                onChange={handleSortChange}
                sx={{
                  height: "25px",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
              >
                <MenuItem value={"Latest Added"}>Latest Added</MenuItem>
                <MenuItem value={"Title"}>Title</MenuItem>
                <MenuItem value={"Lowest Price"}>Lowest Price</MenuItem>
                <MenuItem value={"Highest Price"}>Highest Price</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={2} md={1} className="col-md-1">
              <Button variant="contained" className="search-btn">
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default HoodSearch;
