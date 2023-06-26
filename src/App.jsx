import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useState, React } from "react";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Preferences from "./Pages/Preferences";
import Login from "./Pages/Login";
import useToken from "./useToken";
import { useEffect } from "react";

const App = () => {
  const isLoggedIn = true;
  const { token, setToken, username } = useToken();
  const [showLogin, setShowLogin] = useState(false);
  

  useEffect(() => {
    const delay = async () => {
      await sleep(100);
      setShowLogin(!token); // Show the login element if token is not present
    };

    delay();
  }, [token]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || DEF_DELAY));
  }

  if (showLogin && !token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} username={username} setToken={setToken} setShowLogin={setShowLogin} />
        {/* Rest of your app content */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
