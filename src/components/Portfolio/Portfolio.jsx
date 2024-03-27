import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import { FaCheck } from "react-icons/fa6";

//img section
import MLpro from "../../React_web_pic/ML_project.png";
import GoogleBI from "../../React_web_pic/Krittamate_BI-1.png"
import Googleanalytic from "../../React_web_pic/Google_DataCetificate-1.png"
import PythonMas from "../../React_web_pic/Python_Mastering-1.png"
import Pandases from "../../React_web_pic/Pandas_ForDataScience_Krittamate-1.png"
import AdSQL from "../../React_web_pic/AdvanceSQL_pdf-1.png"
import BasicSQL from "../../React_web_pic/SQL-1.png"
import Excel from "../../React_web_pic/Advance_Excel_Krittamate-1.png"
import Social from "../../React_web_pic/Krittamate_Social_Listening-1.png"
import MINI from "../../React_web_pic/Krittamate_MiniDSBootcamp.png"
import Cyclistic from "../../React_web_pic/Cyclistic.png"
import FutureBI from "../../React_web_pic/FuturePowerBI.png"
import Traffic from "../../React_web_pic/Traffic_Volume_Analysis_Dashboard.png"
import PythonTech from "../../React_web_pic/PythonTech.png"
import SkoolBI from "../../React_web_pic/PowerBI_Skooldio.png"

//
function Portfolio() {
  return (
    <section id='certificate' className={styles.port_section}>
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>
                Certificate & Project
                <FaCheck className={styles.port_icon}/>
            </h3>
            <h4 className={styles.port_details}>Click at the image for more details</h4>
            <div className={styles.port_list}>
            <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/LN2TGBNSYZ5L">
                        <img src= {Googleanalytic} alt="" />
                    </a>
                    </Tilt>
                    <p>Google Data Analytics Professional</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.coursera.org/account/accomplishments/professional-cert/5YWBKBH8GJVC'>
                        <img src= {GoogleBI} alt="" />
                    </a>
                    </Tilt>
                    <p>Google Business Intelligence Professional</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.3c00670">
                        <img src= {MLpro} alt="" />
                    </a>
                    </Tilt>
                    <p>Machine Learning Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://public.tableau.com/views/Cyclistic_Project_17090294743280/Cyclistic?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'>
                        <img src= {Cyclistic} alt="" />
                    </a>
                    </Tilt>
                    <p>Cyclistic Case Study Analysis Dashboard</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://public.tableau.com/views/Minnesota_Department_of_Transportation_TrafficVol/Traffic_Volume_Analysis_Dashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'>
                        <img src= {Traffic} alt="" />
                    </a>
                    </Tilt>
                    <p>Case Study Traffic Analysis Dashboard</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/d52c6113-dd89-4855-ae2c-ca27d41b5156'>
                        <img src= {SkoolBI} alt="" />
                    </a>
                    </Tilt>
                    <p>Advance PowerBI</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/53211114-fa70-40e8-b372-e2ac6618dc07'>
                        <img src= {PythonTech} alt="" />
                    </a>
                    </Tilt>
                    <p>Efficient Python Techniques</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/2519de60-57d0-45dc-a316-6f0142fda5ef">
                        <img src= {PythonMas} alt="" />
                    </a>
                    </Tilt>
                    <p>Python Mastery Programing</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/8ca0550d-697b-48c3-ab38-af4e8342ca47">
                        <img src= {Pandases} alt="" />
                    </a>
                    </Tilt>
                    <p>Essential Pandas for Data Science</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/a8354199-7fe7-4c3c-8ca3-2c025ebf7160">
                        <img src= {AdSQL} alt="" />
                    </a>
                    </Tilt>
                    <p>Advance SQL with Google BigQuery</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.coursera.org/account/accomplishments/verify/X93UHGMAW8D8">
                        <img src= {BasicSQL} alt="" /> 
                    </a>
                    </Tilt>
                    <p>SQL for Data Science</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a>
                        <img src= {Social} alt="" />
                    </a>
                    </Tilt>
                    <p>Social Listening for Data analysis</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.5} transitionSpeed={2500} tiltReverse={true}>
                    <a>
                        <img src= {MINI} alt="" />
                    </a>
                    </Tilt>
                    <p>Mini Data Science Bootcamp by DATAROCKIE</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
