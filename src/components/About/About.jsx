import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
  return (
   <section className= {styles.container}>
    <h2 classname = {styles.title}>About Me</h2>
    <div>
        <ul>
          <li>
            {/*Image Concordia Logo*/}
            <div>
              <h3>Concordia Alumnie</h3>
              <p>I graduated from Concordia University, in the Computer Engineering CO-OP program</p>
            </div>
          </li>
          <li>
            {/*Internsip Picture*/}
            <div>
              <h3>Experience</h3>
              <p>I completed four internship throughout my degree</p>
            </div>
          </li>
          <li>
            {/*Software Picture*/}
            <div>
              <h3>Software Development</h3>
              <p>Passionate about building robust, scalable, and user-focused software systems</p>
            </div>
          </li>
        </ul>
    </div>
   </section>
  );
};