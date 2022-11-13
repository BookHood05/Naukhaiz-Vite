import React from "react";
import Chat from "./Chat/Chat";

function ReceivedHoodsChat() {
  return (
    <Chat
      options={["Hood Owner", "Hood Group", "Connection Owner"]}
      mode={"received"}
    />
  );
}

export default ReceivedHoodsChat;
