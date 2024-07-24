import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
          <a href="mailto:shubhamsenapati2003@gmail.com">shubhamsenapati2003</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkdin-icon" />
          <a href="https://www.linkedin.com/in/shubham-senapati-6ba58021b/">Shubham Senapati</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
          <a href="https://github.com/SHUBHAM03022004">SHUBHAM03022004</a>
        </li>
      </ul>

      <div className={styles.copyright}>
        &copy; 2024 Shubham Senapati. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
