import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.unsplash.com/photo-1604223393744-0089166a1d7f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Yusuf Eryilmaz
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @yusuf
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I try to build twitter clone</p>
          </div>
        </div>
        <img
          src="https://media0.giphy.com/media/XZsscuy3Pv1f5UzF7a/giphy.gif?cid=ecf05e4725a97ce7ad2248ceec3aa295b0dbf2340baa0ba0&rid=giphy.gif"
          alt="gif"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
