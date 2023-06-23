import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ isLoggedIn, username, setToken }) {
  const [isShow, setIsShow] = useState(true);

  const toggleMenu = () => {
    setIsShow(!isShow);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
      setToken(null);
      window.location.reload();
      history.go(0)
    } else {
      history.pushState("/")
    }
  };

  return (
    <nav>
      <p style={{ fontSize: "25px" }}>
        <img style={{ height: "19px" }} src="src/assets/logo.jpg" alt="Logo" />{" "}
        Trippie.in
      </p>
      <div className={styles.menu} onClick={toggleMenu}>
        {isShow ? <FaBars /> : <AiOutlineClose />}
      </div>
      <ul className={styles.navbar} id={isShow ? "" : styles.menu}>
        <li>
          <a href="/" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="/about">About us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className={styles.profile}>
        {isLoggedIn ? (
          <>
            <span style={{ fontSize: "20px", width: "80px" }}>{username}</span>
            <div className="flex justify-center text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-2 rounded-full h-12 w-20 border-x"
                onClick={handleLoginLogout}
                href="/"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-2 px-2 rounded-full h-12 w-20 border-x"
              onClick={handleLoginLogout}
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
