import React from "react";
import Chat from "./Chat/Chat";

function RequestedHoodsChat() {
  return (
    <Chat
      options={["Book Owner", "Hood Group", "Connection Owner"]}
      mode={"requested"}
    />
  );
}

export default RequestedHoodsChat;
