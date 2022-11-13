import React, { useState } from "react";
import "./NewMessage.css";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Picker from "emoji-picker-react";
import SendIcon from "@mui/icons-material/Send";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const NewMessage = (props) => {
  const [text, setText] = useState("HAH");
  const [sendPhoto, setSendPhoto] = useState(false);
  const onPhotoIconClick = () => {
    setSendPhoto(true);
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  return (
    <div className=".new_message_box">
      <Box
        sx={{
          mt: "6px",
          p: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          minHeight: "40px",
        }}
      >
        <Paper
          elevation={6}
          component="form"
          sx={{
            // m: "2vh 2vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "50px",
          }}
        >
          <SentimentVerySatisfiedIcon
            onClick={props.onEmojiClick}
            sx={{ marginLeft: "2%", cursor: "pointer" }}
          />
          <AddPhotoAlternateIcon
            onClick={onPhotoIconClick}
            sx={{ marginLeft: "2%", cursor: "pointer" }}
          />

          {/* <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          /> */}
          {props.emojiKeyboard && <Picker disableAutoFocus={true} native cl />}
          <InputBase
            sx={{
              width: "100%",
              m: "10px 2%",
              p: 0,
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            placeholder="Type a message"
          ></InputBase>
          <SendIcon sx={{ p: 0, mr: "2%", cursor: "pointer" }} />
        </Paper>
      </Box>
    </div>
  );
};

export default NewMessage;
