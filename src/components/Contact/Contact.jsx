import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope, FaArrowDown} from 'react-icons/fa6'

function Contact() {
  return (
    <section id='contact' className={styles.contact_section}>
      <div className={styles.contact_wrapper}>
          <div className={styles.contact_con}>
              <div className={styles.contact_info}>
                <div className={styles.contact_heading}>
                  <h3>
                    <FaArrowDown className={styles.contact_icon1} />
                    Get in touch
                    <FaArrowDown className={styles.contact_icon2} />
                  </h3>
                </div>
                  <p className={styles.contact_address}>
                    Bangkok, Thailand
                  </p>
                  <p className={styles.contact_phone}><FaPhone className={styles.phone_icon}/> (+66) 81 963 0344</p>
                  <br />
                  <p className={styles.contact_mail}><FaEnvelope className={styles.mail_icon}/> champkrittamate@gmail.com</p>
              </div>

          </div>
      </div>
    </section>
  )
}

export default Contact
