import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';
import { FaCheck } from "react-icons/fa6";

//img section
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
import Traffic from "../../React_web_pic/Traffic_Volume_Analysis_Dashboard.png"
import PythonTech from "../../React_web_pic/PythonTech.png"
import SkoolBI from "../../React_web_pic/PowerBI_Skooldio.png"
import EDA from "../../React_web_pic/EDA_Excel.png"
import Dashboard from "../../React_web_pic/Dashboard_Design.png"
import Web from "../../React_web_pic/Web_Scraping.png"
import DBMS from '../../React_web_pic/DBMS.png'
import DBSALE from '../../React_web_pic/DBSALE.jpg'
import Predict from '../../React_web_pic/Predictive.png'
import Sentiment from '../../React_web_pic/Sentiment.png'
import Speech from '../../React_web_pic/Speech.png'
import UserChoice from '../../React_web_pic/UserChoice.jpg'
import DAB from '../../React_web_pic/DAB8.png'

//
function Portfolio() {
  return (
    <section id='certificate' className={styles.port_section}>
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>
                Certificate & Project
                <FaCheck className={styles.port_icon}/>
            </h3>
            <h4 className={styles.port_details}>You can click at image or title for reference</h4>
            <div className={styles.port_list}>
            <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/LN2TGBNSYZ5L">
                        <img src= {Googleanalytic} alt="" />
                    </a>
                    </Tilt>
                    <a href="https://www.coursera.org/account/accomplishments/specialization/LN2TGBNSYZ5L">
                        <p>Google Data Analytics Professional</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.coursera.org/account/accomplishments/professional-cert/5YWBKBH8GJVC'>
                        <img src= {GoogleBI} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.coursera.org/account/accomplishments/professional-cert/5YWBKBH8GJVC'>
                        <p>Google Business Intelligence Professional</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/e0dfb2c0-9767-4fdd-b641-fa93c2f8a386'>
                        <img src= {DAB} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.skooldio.com/certificate/e0dfb2c0-9767-4fdd-b641-fa93c2f8a386'>
                        <p>Skooldio Data Analytics Bootcamp (Batch 8)</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.credly.com/badges/f23ca91a-7939-4823-a77d-024d9e5e0b86/public_url'>
                        <img src= {Predict} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.credly.com/badges/f23ca91a-7939-4823-a77d-024d9e5e0b86/public_url'>
                        <p>Predictive Data Analysis in BigQuery Badge</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.credly.com/badges/b4e32f7c-ac90-41dc-a5b7-e727c339faa8/public_url'>
                        <img src= {Sentiment} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.credly.com/badges/b4e32f7c-ac90-41dc-a5b7-e727c339faa8/public_url'>
                        <p>Analyze Sentiment with Natural Language API Badge</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.credly.com/badges/822d99aa-369d-4b0b-b251-514c7c8014db/public_url'>
                        <img src= {Speech} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.credly.com/badges/822d99aa-369d-4b0b-b251-514c7c8014db/public_url'>
                        <p>Analyze Speech and Language with Google APIs Badge</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://drive.google.com/file/d/1L36UPqMoO_uLu7QCpFDlRsXFFmAHAIyN/view?usp=sharing'>
                        <img src= {UserChoice} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://drive.google.com/file/d/1L36UPqMoO_uLu7QCpFDlRsXFFmAHAIyN/view?usp=sharing'>
                        <p>LMWN UserChoice Restaurant Analytics</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://drive.google.com/file/d/1GuMX-eD_X-ZEpwjdu_XSiVd2-g5ooryE/view?usp=sharing'>
                        <img src= {DBSALE} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://drive.google.com/file/d/1GuMX-eD_X-ZEpwjdu_XSiVd2-g5ooryE/view?usp=sharing'>
                    <p>Sale Analytics (public data)</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://public.tableau.com/views/Minnesota_Department_of_Transportation_TrafficVol/Traffic_Volume_Analysis_Dashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'>
                        <img src= {Traffic} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://public.tableau.com/views/Minnesota_Department_of_Transportation_TrafficVol/Traffic_Volume_Analysis_Dashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link'>
                        <p>Case Study Traffic Analysis Dashboard</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/6e95ae90-e75d-4921-accb-f1d6cbb8bef3'>
                        <img src= {Web} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.skooldio.com/certificate/6e95ae90-e75d-4921-accb-f1d6cbb8bef3'>
                        <p>Data Collection by Web Scraping</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/fbdce581-96cb-4a2d-9094-9673aff5c6a7'>
                        <img src= {EDA} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.skooldio.com/certificate/fbdce581-96cb-4a2d-9094-9673aff5c6a7'>
                        <p>Exploratory Data Analysis with Excel</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/af16cc01-60a6-4f7f-a509-d78ea3b53a1b'>
                        <img src= {Dashboard} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.skooldio.com/certificate/af16cc01-60a6-4f7f-a509-d78ea3b53a1b'>
                        <p>Dashboard Design Principles</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://www.skooldio.com/certificate/d52c6113-dd89-4855-ae2c-ca27d41b5156'>
                        <img src= {SkoolBI} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://www.skooldio.com/certificate/d52c6113-dd89-4855-ae2c-ca27d41b5156'>
                        <p>Analysis and Visualization with PowerBI</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/2519de60-57d0-45dc-a316-6f0142fda5ef">
                        <img src= {PythonMas} alt="" />
                    </a>
                    </Tilt>
                    <a href="https://www.skooldio.com/certificate/2519de60-57d0-45dc-a316-6f0142fda5ef">
                        <p>Python Programing</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/8ca0550d-697b-48c3-ab38-af4e8342ca47">
                        <img src= {Pandases} alt="" />
                    </a>
                    </Tilt>
                    <a href="https://www.skooldio.com/certificate/8ca0550d-697b-48c3-ab38-af4e8342ca47">
                        <p>Essential Pandas for Data Science</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.skooldio.com/certificate/a8354199-7fe7-4c3c-8ca3-2c025ebf7160">
                        <img src= {AdSQL} alt="" />
                    </a>
                    </Tilt>
                    <a href="https://www.skooldio.com/certificate/a8354199-7fe7-4c3c-8ca3-2c025ebf7160">
                        <p>Advance SQL with Google BigQuery</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href="https://www.coursera.org/account/accomplishments/verify/X93UHGMAW8D8">
                        <img src= {BasicSQL} alt="" /> 
                    </a>
                    </Tilt>
                    <a href="https://www.coursera.org/account/accomplishments/verify/X93UHGMAW8D8">
                        <p>SQL for Data Science</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://app.futureskill.co/api/certificate?courseId=69&userId=162762'>
                        <img src= {Excel} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://app.futureskill.co/api/certificate?courseId=69&userId=162762'>
                        <p>Excel for Business Analysis</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://app.futureskill.co/api/certificate?courseId=105&userId=162762'>
                        <img src= {DBMS} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://app.futureskill.co/api/certificate?courseId=105&userId=162762'>
                        <p>Database management with SQL</p>
                    </a>
                </div>

                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a>
                        <img src= {Social} alt="" />
                    </a>
                    </Tilt>
                    <p>Social Listening for Data analysis</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                    <a href='https://api.badgr.io/public/assertions/iX0e_Yd2Qqe8kK-duMPePw?identity__email=champkrittamate%40gmail.com'>
                        <img src= {MINI} alt="" />
                    </a>
                    </Tilt>
                    <a href='https://api.badgr.io/public/assertions/iX0e_Yd2Qqe8kK-duMPePw?identity__email=champkrittamate%40gmail.com'>
                        <p>Mini Data Science Bootcamp by DATAROCKIE</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
