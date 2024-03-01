import React from 'react'
import styles from './Experience.module.css'
import { FaClock } from "react-icons/fa6";
//Import Img from com --> make sure that is located in the same folder as web's folder
import BangChakImg from '../../React_web_pic/Bangchak.png';
import SIIT from '../../React_web_pic/SIIT.png';
import VISTEC from '../../React_web_pic/Vistec.png';

function Experiences() {
  return (
    <div className={styles.experience_con}>
        <h3 className={styles.experience_title}>
            Experience
            <FaClock className={styles.experience_icon} />
        </h3>
        <div className={styles.experience_list}>
            <div className={styles.experience_items}>
                <img src={BangChakImg} alt="" />
                <h4>Bangchak Corporation Public Company Limited (BCP)</h4>
                <h5>Business Intelligence Analyst Internship</h5>
                <h6>(2022/06 - 2022/08)</h6>

            </div>
            <div className={styles.experience_items}>
                <img src={SIIT} alt="" />
                <h4>Sirindhorn International Institute of Technology (SIIT)</h4>
                <h5>Data analysis and Predictive Machine learning projects</h5>
                <h6>(2022/08 - 2023/05)</h6>
            </div>    
            <div className={styles.experience_items}>
                <img src={VISTEC} alt="" />
                <h4>Vidyasirimethi Institute of Science and Technology (VISTEC)</h4>
                <h5>Researcher & Data analyst (cleaning and visualization)</h5>
                <h6>(2023/06 - 2023/12)</h6>
            </div> 
        </div>
    </div>

  )
}

export default Experiences
