import React from 'react'
import styles from './HallofFrame.module.css'
import { FaTrophy } from "react-icons/fa6";
//img//
import JournalModeling from '../../React_web_pic/Journal_of_ModelingACS.jpg';
import JournalChemC from "../../React_web_pic/Journal_of_PhyChemC.jpg";
import BangchakAward from "../../React_web_pic/Bangchak_awards.jpg";

function HallofFrame() {
  return (
    <section id='hallofframe' className={styles.hall_section}>
        <div className={styles.hall_con}>
            <h3 className={styles.hall_title}>
                Hall of Fame
                <FaTrophy className={styles.hall_icon}/>
            
            </h3>
            <div className={styles.hall_list}>
                <div className={styles.hall_items}>
                    <img src={JournalModeling} alt="" />
                    <h4>Journal of Chemical Information and Modeling</h4>
                    <h5>(American Chemical Society 2023)</h5>
                    <p>Pubblished in the world's top 25% international jounal</p>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.3c00670">View the publication</a>
                </div>

                <div className={styles.hall_items}>
                    <img src={JournalChemC} alt="" />
                    <h4>Journal of Physical Chemistry C</h4>
                    <h5>(American Chemical Society 2023)</h5>
                    <p>Pubblished in the world's top 25% international jounal</p>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.3c04956">View the publication</a>
                </div>

                <div className={styles.hall_items}>
                    <img src={BangchakAward} alt="" />
                    <h4>BCP Greenovator Innovation competition 2022</h4>
                    <h5>(Bangchak Corporation Public Company Limited)</h5>
                    <p>The first-runnerup in competition</p>
                </div>
            </div>     
        </div>
        </section>
  )
}
export default HallofFrame
