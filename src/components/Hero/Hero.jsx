import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

//img import section
import ChampPic from "../../React_web_pic/Krittamate_Pic.jpg";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Welcome to my site</p>
                    <h3 className={styles.name_text}>Krittamate Payakkachon</h3>
                    <p className={styles.text_2}>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Data Analyst',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Business Intelligence Analyst',
                            1000,
                            'Machine Learning',
                            1000,
                        ]}
                        speed={40}
                        repeat={Infinity}
                        />
                    </p>
                    <p className={styles.text_descript}>
                    My name is Champ, and I recently graduated with a first-class degree in Chemical Engineering from SIIT.<br/> 
                    Although my background is in Chemical Engineering, I am passionate about Data and Machine Learning.<br/> 
                    I have gained valuable experience working on data analysis and machine learning projects,<br />
                    including developing predictive Machine Learning models for research and development purposes.<br/> 
                    Feel free to explore my portfolio website and contact me to keep connected.
                    </p>
                    <ul className={styles.hero_social}>
                        <li><a href="https://github.com/uiharic"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/krittamate-payakkachon"><FaLinkedin /></a></li>
                        <li><a href="https://www.facebook.com/krittamate.payakachon"><FaFacebook /></a></li>
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <img src= {ChampPic} alt="" />
                </Tilt>
            </div>
        </div>
      
    </div>
  )
}
export default Hero
