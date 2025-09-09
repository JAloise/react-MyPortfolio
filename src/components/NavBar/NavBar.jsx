import React, {useState} from "react"; //import useState to keep track if hamburger menu is open or not
import styles from "./NavBar.module.css"; //import css from navbar.module.css
import { getImageUrl } from "../../utils"; //import function for getting images

//src= "../../../assets/nav/menuIcon.png"

export const NavBar = () => {
    console.log(getImageUrl("nav/menuIcon.png"))
    
    //href = "/" returns to top of page when clicked
    return (<nav className= {styles.navbar}>
        <a className = {styles.title} href="/">My Portfolio</a>  
        <div className= {styles.menu}>
            
            <img className={styles.menuBtn} src= {getImageUrl("nav/menuIcon.png")} alt="Hamburger Menu Icon"/>
            <ul className = {styles.menuItems}>
                <li>
                    <a href="#about">About</a> 
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#project">Projects</a>
                </li>
                <li>
                    <a href="#interest">Interest</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>);
};