import React, { useState, useEffect, useRef } from "react";
// import { useHistory } from "react-router-dom";
import classes from "./Chat.module.css";
import Grid from "@mui/material/Grid"; // Grid version 1
import { Container } from "@mui/system";
import { Chip, Divider } from "@mui/material";
import ChatOverview from "./ChatOverview";
import BookImg from "./book-img.jpg";
import IndividualChatHeader from "./IndividualChatHeader";
import UserMessages from "./UserMessages";
import NewMessage from "./NewMessage";
const Chat = ({ options }) => {
  const messages = ["123", "123", "123", "123", "123", "123", "123", "123"];
  const [emojiKeyboardToggler, setemojiKeyboardToggler] = useState(false);
  // const history = useHistory();
  const emojiToggler = () => {
    scrollToBottom();
    setemojiKeyboardToggler((prev) => !prev);
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };
  const [isIndividual, setIsIndividual] = useState(false);
  const ChatToggler = () => {
    setIsIndividual((prev) => !prev);
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <div className={classes.chat}>
      <Grid container>
        <Grid
          item
          xs={12}
          display={isIndividual && { xs: "none", sm: "block" }}
          sm={4}
          md={2.7}
          lg={2.7}
        >
          <img src={BookImg} className={classes.req_book_img} />
          <Container
            sx={{
              height: "50px",
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
                  label={"Connections"}
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
          <div
            className={classes.chats_overview}
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              height: "calc(50vh - 125px)",
              maxHeight: "calc(50vh - 125px)",
            }}
          >
            <ChatOverview
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
            <ChatOverview
              active={true}
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
            <ChatOverview
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
            <ChatOverview
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
            <ChatOverview
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
            <ChatOverview
              isIndividual={isIndividual}
              setIsIndividual={setIsIndividual}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          display={!isIndividual && { xs: "none", sm: "block" }}
          sm={8}
          md={9.3}
          lg={9.3}
        >
          <div
            className={classes.bg}
            style={{
              marginBottom: emojiKeyboardToggler ? "177.5px" : 0,
              height: emojiKeyboardToggler
                ? "calc(100vh - 295px)"
                : "calc(100vh - 123px)",
              maxHeight: emojiKeyboardToggler
                ? "calc(100vh - 295px)"
                : "calc(100vh - 123px)",
            }}
          >
            <IndividualChatHeader
              ChatToggler={ChatToggler}
              isIndividual={isIndividual}
              options={options}
            />
            <UserMessages />
            <UserMessages user="self" />
            <UserMessages />
            <UserMessages user="self" />
            <UserMessages user="self" />
            <UserMessages />
            <UserMessages user="self" />
            <UserMessages user="self" />
            <div ref={messagesEndRef} />
          </div>
          <NewMessage
            onEmojiClick={emojiToggler}
            emojiKeyboard={emojiKeyboardToggler}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
