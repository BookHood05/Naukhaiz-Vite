import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";

import classes from "./ChatOverview.css";
import Image from "./book-img.jpg";

const ChatOverview = (props) => {
  const isIndividualChat = () => {
    props.setIsIndividual(true);
  };
  return (
    <List
      className={props.active && "overview_bg"}
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        "&:hover": {
          bgcolor: "#d0e1f9",
        },
        p: 0,
        cursor: "pointer",
      }}
      onClick={isIndividualChat}
    >
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <Avatar
            alt="Remy Sharp"
            src={""}
            sx={{ width: 45, height: 45, backgroundColor: "#4d648d" }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <div className="message">
              <header
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  fontSize: "14px",
                }}
              >
                Aqib Amin
              </header>

              <header className="chat_time">6:00 PM</header>
            </div>
          }
          secondary={
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Me: Lorem ipsum dolor sit amet.
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default ChatOverview;
