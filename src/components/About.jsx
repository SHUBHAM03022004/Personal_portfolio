import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="me sitting"
        /> */}

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Front-end development is about creating visually appealing and
                user-friendly interfaces that provide seamless interactions for
                users. It combines design principles with coding skills to build
                responsive and accessible web applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Back-end development focuses on server-side logic, database
                interactions, and ensuring the reliability and performance of
                web applications. It involves building and maintaining the core
                functionalities that support seamless and secure user
                experiences.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                UI design is about crafting intuitive and aesthetically pleasing
                interfaces that enhance user interaction and experience. It
                combines visual design, typography, and layout principles to
                create engaging and accessible digital products.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
