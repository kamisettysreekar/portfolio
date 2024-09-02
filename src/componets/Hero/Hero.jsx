import React from "react";
import  {getImageUrl}  from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi,<br/>
                I'm Sai Srikar
            </h1>
            <p className={styles.description}>
            Software Engineer
            </p>
            <a  className={styles.contactBtn} href ="mailto:kamisettysreekar@gmail.com">
                Contact Me
            </a>

            <a  className={styles.resumeBtn}download = 'resume' href ="/K_Sai_Srikar.pdf">
                    Resume
            </a>
        </div>
        <img  className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} 
            alt = "him"     
        />
        <div  className={styles.topBlur} />
        <div  className={styles.bottomBlur} />
    </section>
  );
};
