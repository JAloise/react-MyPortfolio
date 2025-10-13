import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
  return (
    <section className= {styles.container} id = "about"> {/*having the id, allows to click the 'about' link in navbar*/}
      <h2 className = {styles.title}>About Me</h2>
      <div className = {styles.content}>
        <ul className = {styles.items}>
          <li className = {styles.item}>
            {/*Image Concordia Logo*/}
            <div className = {styles.aboutItemsText}>
              <h3>Concordia Alumnie</h3>
              <p>I graduated from Concordia University, in the Computer Engineering CO-OP program</p>
            </div>
          </li>
          <li className = {styles.item}>
            {/*Internsip Picture*/}
            <div className = {styles.aboutItemsText}>
              <h3>Experience</h3>
              <p>I completed four internship throughout my degree</p>
            </div>
          </li>
          <li className = {styles.item}>
            {/*Software Picture*/}
            <div className = {styles.aboutItemsText}>
              <h3>Software Development</h3>
              <p>Passionate about building robust, scalable, and user-focused software systems</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};