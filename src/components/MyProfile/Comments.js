import React, { useState } from "react";
import styles from "../../styles/MyProfile/Comments.module.css";
import imgSrc from "../../assets/AlbanPhoto.jpeg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

const commentsData = [
    {
      profileImage: imgSrc,
      username: "user1",
      likes: 10,
      timestamp: "1 day ago",
      comment: "This is the first comment.",
    },
    {
      profileImage: imgSrc,
      username: "user2",
      likes: 5,
      timestamp: "1 day ago",
      comment: "This is the second comment.",
    },
    {
      profileImage: imgSrc,
      username: "user3",
      likes: 8,
      timestamp: "1 day ago",
      comment: "This is the third comment.",
    },
    // Add more comments as needed
  ];

  
const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.header}>
        <img src={imgSrc} alt="User Image" />
        <p>Alban Zyle</p>
        <div className={styles.deleteButton}>
          <p>Delete</p>
          <RiDeleteBin6Line className={styles.deleteIcon} />
        </div>
      </div>
      <div className={styles.commentsList}>

      </div>
      <div className={styles.likeArea}>
            <SlLike className={styles.heartIcon}/>
            <FaRegCommentAlt className={styles.commentIcon}/>
            <IoShareOutline className={styles.shareIcon}/>
            <div className={styles.details}>
                <h4>1500 likes</h4>
                <p>2 days ago</p>
            </div>
      </div>
      <div className={styles.commentInput}>
        <GrEmoji />
        <textarea
          className={styles.input}
          placeholder="Add a comment.."
        />
        <BsSend />
      </div>
    </div>
  );
};

export default Comments;
