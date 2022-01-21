import React, { useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//import { Counter } from "./features/counter/Counter";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

import Sidebar from "./components/sidebar/Sidebar";
import { auth } from "./config/fbconfig";

import { login, logout, selectUser } from "./features/userSlice";
import Widget from "./components/widgets/Widget";
import Mynetwork from "./components/mynetwork/Mynetwork";
import Jobs from "./components/jobs/Jobs";
import Viewprofile from "./components/viewprofile/Viewprofile";

function App() {
  const user = useSelector(selectUser);
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is authenticated

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.profilePic,
          })
        );
      } else {
        //user is loggedout
        dispatch(logout);
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/mynetwork" element={<Mynetwork />} />
              <Route path="/mynetwork" element={<Mynetwork />} />
              <Route path=":name" element={<Viewprofile />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
