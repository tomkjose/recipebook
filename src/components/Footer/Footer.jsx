import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p className={styles.footer__text}>
        Copyright &copy; {currentYear} RecipeBook.io
      </p>
    </div>
  );
}

export default Footer;
