import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

function Navbar({ isLoggedIn, username, setToken ,setShowLogin}) {
  const [isShow, setIsShow] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsShow(!isShow);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      window.location.reload();
      history.go(0);
      isLoggedIn = false;
      
    } else {
      navigate("/");
      setShowLogin(true);
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
        <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={200}
            className={styles.link}
          >
          About us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={550}
            className={styles.link}
          >
            Contact
          </Link>
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
