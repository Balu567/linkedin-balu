import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../config/fbconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        //   userAuth.user
        // .updateProfile({
        //   displayName: name,
        //   photoURL: profilePic,
        // })

        // updateProfile({ displayName: name, photoURL: profilePic })
        // .then((userAuth) => {
        console.log(userAuth.user.displayName);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((error) => alert(error));
    // });
  };

  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8S55X51Cl-1MQ9X5m9z6cIg_VhNXYPnAeF3XbQ-x__oc-UP6BjCPShpOD1IUqj9XBbo&usqp=CAU"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name required if registering"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          placeholder="Profile pic Url optional"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
