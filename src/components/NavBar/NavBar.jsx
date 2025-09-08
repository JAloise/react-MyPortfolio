import React from "react";
import styles from "./NavBar.module.css"; //import css from navbar.module.css


export const NavBar = () => {
    //href = "/" returns to top of page when clicked
    return (<nav className= {styles.navbar}>
        <a className = {styles.title} href="/">My Portfolio</a>  
        <div className= {styles.menu}>
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