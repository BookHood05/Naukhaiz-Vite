import React from "react";
import Chat from "./Chat/Chat";

function ConnectedHoodsChat() {
  return (
    <Chat
      options={["Hood Owner", "Hood Group", "Book Owner"]}
      mode={"connected"}
    />
  );
}

export default ConnectedHoodsChat;
