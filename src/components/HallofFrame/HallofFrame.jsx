import React from 'react'
import styles from './HallofFrame.module.css'
import { FaTrophy } from "react-icons/fa6";
//img//
import JournalModeling from '../../React_web_pic/Journal_of_ModelingACS.jpg';
import JournalChemC from "../../React_web_pic/Journal_of_PhyChemC.jpg";
import BangchakAward from "../../React_web_pic/Bangchak_awards.jpg";
import Champ from "../../React_web_pic/Champ.jpg"
import Explore from "../../React_web_pic/CHE.jpg"

function HallofFrame() {
  return (
    <section id='hallofframe' className={styles.hall_section}>
        <div className={styles.hall_con}>
            <h3 className={styles.hall_title}>
                Hall of Fame & Activities
                <FaTrophy className={styles.hall_icon}/>
            
            </h3>
            <div className={styles.hall_list}>
                <div className={styles.hall_items}>
                    <img src={JournalModeling} alt="" />
                    <h4>Journal of Chemical Information and Modeling</h4>
                    <h5>(American Chemical Society 2023)</h5>
                    <p>Pubblished in Q1 international journals</p>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.3c00670">View the publication</a>
                </div>

                <div className={styles.hall_items}>
                    <img src={JournalChemC} alt="" />
                    <h4>Journal of Physical Chemistry C</h4>
                    <h5>(American Chemical Society 2023)</h5>
                    <p>Pubblished in Q1 international journals</p>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.3c04956">View the publication</a>
                </div>

                <div className={styles.hall_items}>
                    <img src={BangchakAward} alt="" />
                    <h4>BCP Greenovator Innovation competition 2022</h4>
                    <h5>(Bangchak Corporation)</h5>
                    <p>The first-runnerup in competition</p>
                </div>

                <div className={styles.hall_items2}>
                    <img src={Explore} alt="" />
                    <h4>CHE Explorer Camp 2023</h4>
                    <h5>(SIIT)</h5>
                    <p>Teacher Assistance</p>
                </div>

                <div className={styles.hall_items2}>
                    <img src={Champ} alt="" />
                    <h4>Data Analytics Bootcamp 2024 (Batch 8)</h4>
                    <h5>(Skooldio)</h5>
                    <p>Recieved Full-Scholarships</p>
                </div>

            </div>     
        </div>
        </section>
  )
}
export default HallofFrame
