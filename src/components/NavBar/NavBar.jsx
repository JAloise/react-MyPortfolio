import React, {useState} from "react"; //import useState to keep track if hamburger menu is open or not
import styles from "./NavBar.module.css"; //import css from navbar.module.css
import { getImageUrl } from "../../utils"; //import function for getting images

/* Option1: Claude
// In NavBar.jsx - import the image
import menuIcon from "../../../assets/nav/menuIcon.png";

// Use it directly
<img className={styles.menuBtn} src={menuIcon} alt="Hamburger Menu Icon"/>
*/

export const NavBar = () => {

    //console.log(getImageUrl("nav/menuIcon.png")); //test if function works

    //href = "/" returns to top of page when clicked

    //Provide functionality to hamburger button, useState
    //menuOpen: Current value; setMenuOpen: Function to update the value; useState: React hook to manage state
    const [isOpen, setMenuOpen] = useState(false);

    return (<nav className= {styles.navbar}>
        <a className = {styles.title} href="/">My Portfolio</a>  
        <div className= {styles.menu}>

            {/* menuOpen is false, shows menuIcon.png, onClick will set the menuOpen to true->then displays the closeIcon.png) */}
            <img className={styles.menuBtn} src= {isOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt= "Menu Icon" onClick={()=> setMenuOpen(!isOpen)}/>

            {/* string interpolation. if isOpen is true, style after && is applied */}
            <ul className = {`${styles.menuItems} ${isOpen &&styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
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