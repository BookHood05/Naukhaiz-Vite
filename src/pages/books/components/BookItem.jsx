import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { FaHandsHelping } from "react-icons/fa";
import ChatIcon from "@mui/icons-material/Chat";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TitleIcon from "@mui/icons-material/Title";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import BookImg from "./book-img.jpg";
import Spring from "./spring.png";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GiReceiveMoney } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";

import "./BookItem.css";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#4d648d",
  },
});

function BookItem({ btnLabel }) {
  const [open, setOpen] = useState(false);
  const descriptionElementRef = useRef(null);
  const [despExpanded, setDespExpanded] = React.useState(false);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <Grid
        container
        sx={{
          boxShadow: "4px 3px 4px 3px rgba(77, 100, 141, 0.3)",
          mb: "-10px",
          borderRadius: "5px",
          backgroundColor: "#d0e1f945",
        }}
        className="book-container"
      >
        <img src={Spring} alt="" className="book-spring" />
        <Grid item lg={5} xs={5} sm={5} md={5} sx={{ height: "280px" }}>
          <Tooltip
            title="Click to View Details"
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 400 }}
            followCursor={true}
          >
            <Button
              disableRipple
              className="book-img"
              onClick={() => {
                setOpen(true);
              }}
            >
              <img src={BookImg} alt="book-img" height="280px" width="100%" />
            </Button>
          </Tooltip>
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
              }}
            >
              <Chip
                avatar={
                  <Avatar
                    className="book-owner-chip"
                    alt="Aqib Amin"
                    src=""
                    sx={{ backgroundColor: "#4d648d" }}
                  />
                }
                label="Talha Bin Khalid"
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

          <Grid container>
            <Grid item lg={2}>
              <Avatar
                sx={{
                  mt: "2px",
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#4d648d",
                }}
              >
                <QrCode2Icon fontSize="small" />
              </Avatar>
            </Grid>
            <Grid item lg={10} sx={{ my: "auto" }}>
              <Typography
                sx={{ fontSize: "14px", pl: "5px", color: "#283655" }}
              >
                978-9389423594
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
            <Grid item lg={2} xs={2} sm={2} md={2}>
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
            <Grid item lg={10} xs={10} sm={10} md={10} sx={{ my: "auto" }}>
              <Typography
                sx={{
                  fontSize: "13px",
                  pl: "5px",
                  color: "#283655",
                  maxHeight: "23px",
                  overflowY: "hidden",
                }}
              >
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
                {btnLabel === "BUY" ? (
                  <LocalOfferIcon fontSize="small" />
                ) : (
                  <BiCategoryAlt />
                )}
              </Avatar>
            </Grid>
            <Grid item lg={10} sx={{ my: "auto" }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  pl: "5px",
                  color: "#283655",
                  maxHeight: "23px",
                  overflowY: "hidden",
                }}
              >
                {btnLabel === "BUY" ? "1500 Rs." : "Computer Science"}
              </Typography>
            </Grid>
          </Grid>
          {btnLabel === "BUY" ? (
            <>
              <Button
                className="buy-btn"
                sx={{ mt: "10px", mr: "5px", width: "47%" }}
                startIcon={
                  btnLabel === "OPEN CHAT" ? <ChatIcon /> : <LocalMallIcon />
                }
                variant="contained"
              >
                {btnLabel}
              </Button>
              <Button
                className="buy-btn"
                sx={{ mt: "10px", width: "48%" }}
                onClick={() => {}}
                startIcon={<FaHandsHelping />}
                variant="contained"
              >
                HOOD
              </Button>
            </>
          ) : (
            <Button
              className="sell-btn"
              sx={{ mt: "10px", width: "100%" }}
              onClick={() => {}}
              startIcon={<GiReceiveMoney />}
              variant="contained"
            >
              {btnLabel}
            </Button>
          )}
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        scroll="paper"
      >
        <DialogContent
          className="dialogue-content"
          sx={{
            p: 0,
            height: "440px",
            mt: "-2px",
            width: { lg: "525px", md: "525px", sm: "525px", xs: "290px" },
            backgroundColor: "#d0e1f945",
          }}
        >
          <DialogContentText
            className="dialogue-content"
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <div style={{ position: "relative" }}>
              <IconButton
                className="close-btn"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CancelIcon
                  sx={{ backgroundColor: "#d0e1f9", borderRadius: "40px" }}
                />
              </IconButton>
              <Grid container sx={{ mt: "-40px" }}>
                <Grid
                  item
                  lg={5}
                  xs={12}
                  sm={12}
                  md={5}
                  sx={{ height: "360px" }}
                >
                  <img
                    className="book-img-expanded"
                    src={BookImg}
                    alt="book-img"
                    height="360px"
                    width="100%"
                  />
                </Grid>
                <Grid item lg={7} xs={12} sm={12} md={7}>
                  <Grid container sx={{ mt: "2px", mb: "2px" }}>
                    <Grid
                      item
                      lg={10}
                      md={10}
                      sm={10}
                      xs={10}
                      sx={{ mx: "auto" }}
                    >
                      <Divider
                        sx={{
                          mt: "7px",
                          "&::before, &::after": { borderColor: "#283655" },
                        }}
                      >
                        <Chip
                          label="ABOUT"
                          variant="outlined"
                          sx={{
                            backgroundColor: "#4d648d",
                            borderColor: "#283655",
                            color: "white",
                            fontSize: "16px",
                          }}
                        />
                      </Divider>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="ISBN" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        978-9389423594
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Title" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "14px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        Advanced Web Development with React.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Author" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        Mehul Mohan.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip
                        label="Category"
                        className="book-info-chip"
                        sx={{ fontSize: "7px" }}
                      />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        Computer Science.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Publisher" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        Pearson Publications.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Pub Date" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        20-10-2018
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Rating" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        <StyledRating
                          defaultValue={4.5}
                          getLabelText={(value) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                          }
                          precision={0.5}
                          icon={<LocalLibraryIcon fontSize="inherit" />}
                          emptyIcon={<LocalLibraryIcon fontSize="inherit" />}
                          readOnly
                        />
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "7px" }}>
                    <Grid item lg={4} md={4} sm={4} xs={4} sx={{ my: "auto" }}>
                      <Chip label="Pages" className="book-info-chip" />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={8} sx={{ my: "auto" }}>
                      <Typography
                        style={{
                          fontSize: "16px",
                          pl: "8px",
                          color: "#283655",
                          pt: "10px",
                        }}
                      >
                        700
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <Accordion
                  expanded={despExpanded === "description"}
                  onChange={(event, isExpanded) => {
                    setDespExpanded(isExpanded ? "description" : false);
                  }}
                  sx={{ mb: { xs: "10px" } }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Grid container sx={{ mt: "-10px" }}>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="heading-line"
                      >
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
                          label={"Description"}
                          sx={{
                            width: "100%",
                            mt: "10px",
                            borderRadius: "8px",
                            fontSize: "15px",
                          }}
                        ></Chip>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="heading-line"
                      >
                        <Divider
                          sx={{
                            mt: "20px",
                            height: 5,
                            "&::before, &::after": { borderColor: "#283655" },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={{
                        fontSize: "16px",
                        ml: "30px",
                        color: "#283655",
                        pt: "10px",
                      }}
                    >
                      The book starts by introducing the reader to React, what
                      it is and why you need a library like React to work with
                      medium to large scale applications. We then move on to
                      implementing simple client-side programs with React,
                      uncovering modern React practices like React hooks and
                      diving deep into various kinds of hooks. We then move to
                      implement React on the server using Server-Side Rendering
                      to bring benefits of the SEO world to the dynamic
                      rendering nature of front-end libraries.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BookItem;
