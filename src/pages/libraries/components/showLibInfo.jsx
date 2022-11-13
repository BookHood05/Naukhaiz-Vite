import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container } from "@mui/system";
import { Grid, Chip, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../libraries.css";
import BulletIcon from "../images/bullet.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid",
  borderRadius: 3,
  boxShadow: 24,
  paddingX: 4,
  paddingY: 2.5,
  width: { xs: "78%", sm: "55%" },
};

export default function TransitionsModal({libinfo}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        sx={{
          position: "absolute",
          height: 27,
          width: 27,
          backgroundColor: "transparent",
          right: "5.5%",
          marginTop: 1,
        }}
      >
        <InfoIcon sx={{ color: "#4d648d" }} />
      </IconButton>
      <Modal
        sx={{ width: "100%" }}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Container
              sx={{
                mb: "50px",
                borderRadius: "10px",
                height: "50px",
                boxShadow: "4px 3px 4px 3px rgba(77, 100, 141, 0.2)",
                width: "100%",
              }}
            >
              <Grid container>
                <Grid item lg={1} md={1} sm={1} xs={1} className="heading-line">
                  <Divider
                    sx={{
                      mt: "20px",
                      height: 5,
                      "&::before, &::after": { borderColor: "#283655" },
                    }}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                  <Chip
                    className="swiper-heading"
                    label={libinfo.name}
                    sx={{
                      width: "100%",
                      mt: "10px",
                      borderRadius: "8px",
                      fontSize: "15px",
                    }}
                  ></Chip>
                </Grid>
                <Grid item lg={1} md={1} sm={1} xs={1} className="heading-line">
                  <Divider
                    sx={{
                      mt: "20px",
                      height: 5,
                      "&::before, &::after": { borderColor: "#283655" },
                    }}
                  />
                </Grid>
              </Grid>
            </Container>
            <div className="addContentDialog">
              <Typography
                id="transition-modal-title"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mt: 1,
                  fontSize: 20,
                  color: "#283655",
                }}
              >
                <img
                  style={{
                    width: 25,
                    marginBottom: "2.5px",
                    height: "10px",
                    marginLeft: -15,
                    marginRight: 4,
                  }}
                  src={BulletIcon}
                />
                Owner
              </Typography>
              <Chip
                avatar={
                  <Avatar className="libOwnerChip" alt="Natacha" src="" />
                }
                label={libinfo.owner}
                variant="outlined"
                sx={{
                  mt: 0.9,
                  ml: 2,
                  backgroundColor: "#d0e1f9",
                  border: "1px solid #283655",
                  color: "#283655",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              />
            </div>
            <Typography
              id="transition-modal-title"
              component="h2"
              sx={{ fontWeight: "bold", mt: 2, fontSize: 20, color: "#283655" }}
            >
              <img
                style={{
                  width: 25,
                  marginBottom: "2.5px",
                  height: "10px",
                  marginLeft: -15,
                  marginRight: 4,
                }}
                src={BulletIcon}
              />
              Tags
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ ml: 6, mb: 1, mt: -1 }}
            >
              <Chip
                label="Tag1"
                sx={{
                  marginX: 1,
                  mt: 1,
                  backgroundColor: "#d0e1f9",
                  border: "1px solid #283655",
                  color: "#283655",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#283655",
                    color: "white",
                    border: "1px solid #283655",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleClick}
              />
              <Chip
                label="Tag2"
                sx={{
                  marginX: 1,
                  mt: 1,
                  backgroundColor: "#d0e1f9",
                  border: "1px solid #283655",
                  color: "#283655",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#283655",
                    color: "white",
                    border: "1px solid #283655",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleClick}
              />
              <Chip
                label="Tag3"
                sx={{
                  marginX: 1,
                  mt: 1,
                  backgroundColor: "#d0e1f9",
                  border: "1px solid #283655",
                  color: "#283655",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#283655",
                    color: "white",
                    border: "1px solid #283655",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleClick}
              />
            </Typography>
            <Typography
              id="transition-modal-title"
              component="h2"
              sx={{ fontWeight: "bold", fontSize: 20, mt: 2, color: "#283655" }}
            >
              <img
                style={{
                  width: 25,
                  marginBottom: "2.5px",
                  height: "10px",
                  marginLeft: -15,
                  marginRight: 4,
                }}
                src={BulletIcon}
              />
              Description
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ ml: 2, color: "#283655" }}
            >
              {libinfo.disc}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
