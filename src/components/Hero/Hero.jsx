import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"; //import css from Hero.module.css

export const Hero = () => {
    return (
        <section className = {styles.container}>
            {/*Left side*/}
            <div className = {styles.content}>
                <h1 className= {styles.title}>Hi, I am </h1>
                <p className= {styles.text}>I am a recent computer engineerin graduate. Welcome to my portfolio!</p>
                <a href = "mailto:j.aloise2000@gmail.com" className= {styles.contactbtn}>Contact Me</a>
            </div>
            <img className= {styles.img} src = {getImageUrl("contact/mypic.jpeg")} alt = "My Picture"/>
            <div className= {styles.topBlur}/>
            <div className= {styles.bottomBlur}/>

        </section>
    );
};