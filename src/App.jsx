import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import {useState, React} from "react";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Preferences from "./Pages/Preferences";
import Login from "./Pages/Login";
import useToken from "./useToken";

const App = () => {
  const isLoggedIn = true;
  const username = "John Doe";
  const {token, setToken} = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} username={username} />
        {/* Rest of your app content */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/preferences" element={<Preferences/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
