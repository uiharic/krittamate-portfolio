import React from 'react'
import styles from './Experience.module.css'
//Import Img from com --> make sure that is located in the same folder as web's folder
import BangChakImg from '../../React_web_pic/Bangchak.png';
import SIIT from '../../React_web_pic/SIIT.png';
import VISTEC from '../../React_web_pic/Vistec.png';

function Experiences() {
  return (
    <div className={styles.experience_con}>
        <h3 className={styles.experience_title}>Experience</h3>
        <div className={styles.experience_list}>
            <div className={styles.experience_items}>
                <img src={BangChakImg} alt="" />
                <h4>Bangchak Corporation Public Company Limited (BCP)</h4>
                <h5>Internship Bussiness Development <br /> (2022/06 - 2022/08)</h5>

            </div>
            <div className={styles.experience_items}>
                <img src={SIIT} alt="" />
                <h4>Sirindhorn International Institute of Technology (SIIT)</h4>
                <h5>Data analysis and Machine learning models projects <br /> (2022/08 - 2023/05)</h5>
            </div>    
            <div className={styles.experience_items}>
                <img src={VISTEC} alt="" />
                <h4>Vidyasirimethi Institute of Science and Technology (VISTEC)</h4>
                <h5>Research data analyst <br /> (2023/06 - 2023/12)</h5>
            </div> 
        </div>
    </div>

  )
}

export default Experiences
