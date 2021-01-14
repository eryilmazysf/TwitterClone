import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.unsplash.com/photo-1610365584772-01666edfd159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
          <input placeholder="What`s happening ?" type="text" />
        </div>

        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
