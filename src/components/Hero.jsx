import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shubham Senapati</h1>
        <p className={styles.description}>
          As an aspiring React developer, I am dedicated to crafting dynamic and
          responsive web applications using the latest technologies. With a keen
          eye for design and a passion for coding, I strive to create
          user-friendly and efficient digital solutions.
        </p>
        <div className={styles.buttonContainer}>
          <a
            className={styles.contactBtn}
            href="mailto:shubhamsenapati2003@gmail.com"
          >
            Contact Me
          </a>
          <a className={styles.downloadBtn} href="/cv.pdf" download="cv.pdf">
            Download My CV
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroimage1.png")}
        alt="hero image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
