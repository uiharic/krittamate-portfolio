import React from 'react'
import styles from './Number.module.css'
import Logo from "../../React_web_pic/SIIT_TU.png"
import { FaSchool } from "react-icons/fa6";


function Number() {

  const downloadMyFile = () => {
    const fileLink = 'https://drive.google.com/file/d/1b0vjHsNc4uDHAxvempPaHyE8-9Y94xaJ/view?usp=sharing'; 
    const tempLink = document.createElement('a');

    tempLink.href = fileLink;
    tempLink.setAttribute('download', 'transcript.pdf'); 
    tempLink.click();  
}

  return (
    <section id='education' className={styles.num_section}>
    <div className={styles.number_con}>
              {/* Title and University */}
        <div className={styles.number_header}> 
          <h2 className={styles.number_title}>
            Education 
            <FaSchool className={styles.school_icon} />
          </h2>

          {/* University Logo */}
          <a href="https://www.siit.tu.ac.th/">
            <img src={Logo} alt="" className={styles.logo} /> 
          </a>

          <p className={styles.number_uni}>Sirindhorn International Institute of Technology (SIIT), Thammasat University</p>
          <p className={styles.number_major}>Bachelor of Engineering (Chemical Engineering)</p>
          <p className={styles.number_honors}>First-Class Honors</p>
          <p className={styles.number_date}>(Aug 2019 - May 2023)</p>
        </div>

        <div className={styles.number_items_wrapper}>
          <div className={styles.number_items}>
            <h3>3.64</h3>
            <p>GPAX</p>
          </div>
          <div className={styles.number_items}>
            <h3>805</h3>
            <p>TOEIC</p>
          </div>
          <div className={styles.number_items}>
            <h3>7.0</h3>
            <p>IELTS</p>
          </div>
        </div>

        <div className={styles.download_button_wrapper}>
            <button className={styles.download_button} onClick={downloadMyFile}>
                View My Transcript
            </button> 

            
        </div>
    </div>
  </section>
  )
}

export default Number
