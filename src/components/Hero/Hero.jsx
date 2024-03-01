import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

//img import section
import ChampPic from "../../React_web_pic/Krittamate_Pic.jpg";

function Hero() {
  return (
    <section id='home' className={styles.home_section}>
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Welcome to my personal website</p>
                        <h3 className={styles.name_text}>Krittamate Payakkachon (Champ)</h3>
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
                            Hi! I'm Champ, a recent graduate specializing in:
                                <ul>
                                    <li>Data analysis and Machine learning</li>
                                    <li>Business Intelligence (BI Analyst)</li>
                                </ul> 
                        </p>
                        <p className={styles.text_descript2}>
                            "I'm passionate about using data to solve practical business challenges. 
                            My experience includes performing EDA, data modeling ETL, and dashboard visualization to drive better data-driven decision-making and building predictive models (LGB, SVM, KNN, DT, XGB, ADA). 
                            I'm a quick learner, productive, and willing to implement my skills. Let's explore my portfolio and connect on LinkedIn if interested!"
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
    </section>
  )
}
export default Hero
