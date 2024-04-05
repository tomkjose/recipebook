import React from "react";
import styles from "./Navbar.module.css";
import { useChangeTheme } from "../../provider/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "../../redux/actions/userAction";

function Navbar() {
  const { currentTheme, changeTheme } = useChangeTheme();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme ? "#171717" : "white",
        color: currentTheme ? "white" : "black",
      }}
    >
      <div className={styles.nav__brand}>
        Recipe
        <span style={{ color: "#e1685a", fontSize: "inherit" }}>Book.io</span>
      </div>
      <ul className={styles.nav__list}>
        <Link to="/" className={styles.nav__link}>
          <li className={styles.nav__list__item}>Home</li>
        </Link>
        {user && Object.keys(user).length > 0 && (
          <Link to="/saved" className={styles.nav__link}>
            <li className={styles.nav__list__item}>Saved</li>
          </Link>
        )}
      </ul>
      <div className={styles.nav__menu}>
        {currentTheme ? (
          <span
            className="material-symbols-outlined"
            onClick={() => changeTheme()}
            style={{ cursor: "pointer" }}
          >
            light_mode
          </span>
        ) : (
          <span
            className="material-symbols-outlined"
            onClick={() => changeTheme()}
            style={{ cursor: "pointer" }}
          >
            dark_mode
          </span>
        )}
        {user && Object.keys(user).length > 0 ? (
          <button className={styles.nav__btn} onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>Log Out
          </button>
        ) : (
          <button
            className={styles.nav__btn}
            onClick={() => navigate("/signin")}
          >
            <span className="material-symbols-outlined">login</span>Login
          </button>
        )}
      </div>

      <div
        className={styles.compact__menu}
        style={{
          backgroundColor: currentTheme ? "#171717" : "white",
          color: currentTheme ? "white" : "black",
        }}
      >
        <Link to="/" className={styles.nav__link}>
          <div className={styles.compact__menu__item}>
            <span className="material-symbols-outlined">home</span>
            Home
          </div>
        </Link>

        {user && Object.keys(user).length > 0 && (
          <Link to="/" className={styles.nav__link}>
            <div className={styles.compact__menu__item}>
              <span className="material-symbols-outlined">bookmark_add</span>
              Saved
            </div>
          </Link>
        )}
        {user && Object.keys(user).length > 0 ? (
          <div className={styles.compact__menu__item} onClick={handleLogout}>
            <span className="material-symbols-outlined">logout</span>
            Logout
          </div>
        ) : (
          <div
            className={styles.compact__menu__item}
            onClick={() => navigate("/signin")}
          >
            <span className="material-symbols-outlined">login</span>
            Lognin
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
