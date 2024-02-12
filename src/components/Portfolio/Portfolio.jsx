import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

//img section
import MLpro from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/ML_project.png";
import Statpro from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Project_Stat.png"
import Googleanalytic from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Google_DataCetificate-1.png"
import PythonMas from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Python_Mastering-1.png"
import Pandases from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Pandas_ForDataScience_Krittamate-1.png"
import AdSQL from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/AdvanceSQL_pdf-1.png"
import BasicSQL from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/SQL-1.png"
import Excel from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Advance_Excel_Krittamate-1.png"
import Social from "C:/Users/CHAMP/Desktop/react-portfolio/src/React_web_pic/Krittamate_Social_Listening-1.png"

//
function Portfolio() {
  return (
    <section id='certificate' className={styles.port_section}>
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Certificate</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {MLpro} alt="" />
                    </Tilt>
                    <p>Machine Learning Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Statpro} alt="" />
                    </Tilt>
                    <p>Data Analysis Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Googleanalytic} alt="" />
                    </Tilt>
                    <p>Google Data Analytics</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {PythonMas} alt="" />
                    </Tilt>
                    <p>Python Mastery Programing</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Pandases} alt="" />
                    </Tilt>
                    <p>Essential Pandas for Data Science</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {AdSQL} alt="" />
                    </Tilt>
                    <p>Advance SQL with Google BigQuery</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {BasicSQL} alt="" />
                    </Tilt>
                    <p>Basic SQL</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Excel} alt="" />
                    </Tilt>
                    <p>Excel for business</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <img src= {Social} alt="" />
                    </Tilt>
                    <p>Social Listening for Data analysis</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
