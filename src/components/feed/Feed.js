import React, { useState, useEffect } from "react";
import "./feed.css";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import FlipMove from "react-flip-move";

import InputOption from "./InputOption";
import Post from "../post/Post";
import { db } from "../../config/fbconfig";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { Avatar } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widgets/Widget";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  const postRef = collection(db, "posts");
  const q = query(postRef, orderBy("createdAt", "desc"));
  // console.log(ref);
  //console.log("posts", posts);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postRef);
      //console.log("docs is", data.docs);
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    // db.collection("posts").onSnapshot((snapshot) =>
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   )
    // );
    getPosts();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    await addDoc(postRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: user.photoUrl || "",
      createdAt: serverTimestamp(),
    });
    setInput("");
    // db.collection("posts").add({
    //   name: "Balaraju Malla",
    //   description: "this is a test",
    //   message: input,
    // });
  };
  return (
    <>
      <div className="feed_body">
        <Sidebar />
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed_topinput">
              <Avatar src={user.photoUrl} alt="" style={{ marginRight: 10 }} />
              <div className="feed__input">
                <CreateIcon />

                <form>
                  <input
                    value={input}
                    placeholder="Start a post"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                  />
                  <button onClick={sendPost} type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="feed__InputOptions">
              <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
              <InputOption
                Icon={SubscriptionsIcon}
                title="Video"
                color="#E7A33E"
              />
              <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
              <InputOption
                Icon={CalendarViewDayIcon}
                title="Write article"
                color="#7FC15E"
              />
            </div>
          </div>
          <FlipMove>
            {posts.map((post) => (
              <Post
                key={post.id}
                name={post.name}
                description={post.description}
                message={post.message}
                photourl={post.photourl}
              />
            ))}
          </FlipMove>
        </div>
        <Widget />
      </div>
    </>
  );
}

export default Feed;
