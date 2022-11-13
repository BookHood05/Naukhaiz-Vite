import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import classes from "./UserMessages.module.css";
import Paper from "@mui/material/Paper";

const UserMessages = (props) => {
  const [user, setUser] = useState(props.user);

  return (
    <div>
      <header className={classes.chat_time}>
        <Chip
          label="6:00 PM"
          sx={{ backgroundColor: "#283655", color: "white" }}
        />
      </header>
      <List
        sx={{
          // maxWidth: "80%",
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          pb: 0,
        }}
      >
        <ListItem alignItems="flex-start" className={classes.chat_card}>
          {user !== "self" && (
            <ListItemIcon>
              <Avatar
                alt="Remy Sharp"
                src={""}
                sx={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#d0e1f9",
                  color: "#4d648d",
                }}
              />
            </ListItemIcon>
          )}

          <ListItemText
            primary={
              <div>
                {user !== "self" && (
                  <section className={classes.message_bg_sender}></section>
                )}
                {user === "self" && (
                  <section className={classes.message_bg_receiver}></section>
                )}
                <Paper
                  elevation={9}
                  component="form"
                  className={
                    user === "self" ? classes.sender_message : classes.message
                  }
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda laudantium unde totam obcaecati fugit ipsa doloribus
                  est repellendus neque exercitationem.
                </Paper>
              </div>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default UserMessages;
