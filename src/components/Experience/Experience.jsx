import React from 'react';
import skills from "../../data/skills.json"
import styles from "./Experience.module.css";
import {getImageUrl} from "../../utils";

export const Experience = () => {
    return (
        <section id = "Experience">
            <h2 className = {styles.title}>Experience</h2>
            <div>
                {/*This is left side where all logos are located*/}
                <div>{
                    skills.map((skill,id)=> {
                        return <div key = {id}>
                            <div>
                                <img src={getImageUrl(skill.imgsource)} alt= {skill.title}/>
                            </div>
                        </div>
                    })
                }</div>
                <ul></ul>
            </div>
        </section>
    );
};
//TODO: Add skill images and experience company logos
//TODO: look up map function