import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "./HoodSwiper.css";
import HoodItem from "./HoodItem";
import { Container } from "@mui/system";
import { Grid, Chip, Divider } from "@mui/material";

function ConnectedHoods() {
  return (
    <>
      <Container
        sx={{
          mt: "30px",
          borderRadius: "8px",
          height: "50px",
          boxShadow: "4px 3px 4px 3px rgba(77, 100, 141, 0.3)",
          width: "90%",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={0.5}
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
          <Grid item lg={11} md={11} sm={11} xs={11}>
            <Chip
              className="swiper-heading"
              label={"Connected Hoods"}
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
            lg={0.5}
            md={0.5}
            sm={0.5}
            xs={0.5}
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
      </Container>

      <div className="hoodSwiper">
        <Swiper
          breakpoints={{
            200: {
              slidesPerView: "auto",
            },
            600: {
              slidesPerView: "auto",
            },
            950: {
              slidesPerView: "auto",
            },
            1024: {
              slidesPerView: "auto",
            },
          }}
          navigation={true}
          modules={[Keyboard, Navigation]}
        >
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
          <SwiperSlide>
            <HoodItem btnLabel={"CONNECT"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default ConnectedHoods;
