import React from 'react';
import { getImageUrl} from "../../utils";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className= {styles.container} id = "about">
      <h2 className = {styles.title}>About</h2>
      <div className = {styles.content}>
        <img className={styles.aboutImage} 
        src = {getImageUrl("about/aboutImage.png")} 
        alt = "screen" />
        <ul className ={styles.aboutItems}>
          {/* <li className={styles.aboutItem}>
            <img src = {getImageUrl("about/cursorIcon.png")} alt = "Cursor" />
          <div className={styles.aboutItemText}>
            <h3>
              WEB Developer
            </h3>
            <p>
              I'm a web developer
            </p>
          </div>
          </li> */}
          <li className={styles.aboutItem}>
            <img src = {getImageUrl("about/serverIcon.png")} alt = "server" />
          <div className={styles.aboutItemText}>
            <h3>
              Web Developer
            </h3>
            <p>
            Experienced in designing and developing workflows to optimise online application operations utilising React and
            Django, integrating RESTful APIs, and improving real-time data visibility
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl("about/uiIcon.png")} alt = "Uicon" />
          <div className={styles.aboutItemText}>
            <h3>
              Solution developer
            </h3>
            <p>
            Experienced in developing customised software solutions that match 
            particular company requirements while guaranteeing efficient and successful execution.
            </p>
          </div>
          </li>
          </ul>
        </div>
    </section>
    
  );
};

