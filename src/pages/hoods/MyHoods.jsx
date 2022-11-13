import React from "react";
import RequestedHoods from "./components/RequestedHoods";
import ReceivedHoods from "./components/ReceivedHoods";
import ConnectedHoods from "./components/ConnectedHoods";
// import "swiper/swiper-bundle.min.css";

function MyHoods() {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <RequestedHoods />
      <ReceivedHoods />
      <ConnectedHoods />
    </div>
  );
}

export default MyHoods;
