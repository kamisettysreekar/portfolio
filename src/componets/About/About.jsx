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
            Developed workflows and web solutions that optimize application operations and 
            enhance user experience using modern technologies like React and Django.
            </p>
          </div>
          </li>
          <li className={styles.aboutItem}>
            <img src = {getImageUrl("about/uiIcon.png")} alt = "Uicon" />
          <div className={styles.aboutItemText}>
            <h3>
              Software Solution developer
            </h3>
            <p>
            Experienced in developing customized software solutions tailored to specific business needs, 
            ensuring seamless implementation and measurable success.
            </p>
          </div>
          </li>
          </ul>
        </div>
    </section>
    
  );
};

