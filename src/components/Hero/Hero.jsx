import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook, FaMedium} from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt';

//img import section
import ChampPic from "../../React_web_pic/Krittamate_Pic.jpg";
import Pic from "../../React_web_pic/Pic.jpg"

function Hero() {
  return (
    <section id='home' className={styles.home_section}>
        <div className={styles.hero_wrapper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Welcome to my portfolio website</p>
                        <h3 className={styles.name_text}>Krittamate Payakkachon (Champ)</h3>
                        <p className={styles.text_2}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Junior Data Analytics',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Business Intelligence Analyst',
                                1000,
                                'ML for Analytics',
                                1000,
                            ]}
                            speed={40}
                            repeat={Infinity}
                            />
                        </p>
                        <p className={styles.text_descript2}>
                            "Hey there! I'm Champ, a recent 2023 Engineering graduate. I'm incredibly enthusiastic about utilizing data to uncover insights and help businesses enhance their strategies. 
                            I'm always on the lookout to enhance my skills and stay updated through various communities and courses. 
                            After spending some time studying and preparing for work, I have developed a strong set of technical and soft skills, including storytelling and empathy. 
                            I'm particularly skilled at the curiosity to ask questions, ETL querying utilizing SQL and Excel, conducting EDA with Python and Excel, and designing interactive visualizations in PowerBI. Let's explore my portfolio, Medium and on LinkedIn!"
                        </p>
                        <ul className={styles.hero_social}>
                            
                            <li><a href="https://www.linkedin.com/in/krittamate-payakkachon"><FaLinkedin /></a></li>
                            <li><a href="https://www.facebook.com/krittamate.payakachon"><FaFacebook /></a></li>
                            <li><a href="https://medium.com/@champkrittamate"><FaMedium /></a></li>
                            <li><a href="https://github.com/uiharic"><FaGithub /></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Pic} alt="" />
                    </Tilt>
                </div>
            </div>
        
        </div>
    </section>
  )
}
export default Hero
