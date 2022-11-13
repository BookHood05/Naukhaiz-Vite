import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./LibSearch.css";
function LibSearch() {
  return (
    <Container sx={{ mx: "auto", width: "85%" }}>
      <div className="libsearchwrapper">
        <div className="libsearchbox">
          <Grid container>
            <Grid item xs={12} sm={10} md={11} lg={11} className="col-md-11">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name, Tags..."
              />
            </Grid>
            <Grid item xs={12} sm={2} md={1} lg={1} className="col-md-1">
              <Button variant="contained" className="libsearch-btn">
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default LibSearch;
