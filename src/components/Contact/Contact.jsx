import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope} from 'react-icons/fa6'

function Contact() {
  return (
    <section id='contact' className={styles.contact_section}>
      <div className={styles.contact_wrapper}>
          <div className={styles.contact_con}>
              <div className={styles.contact_info}>
                  <h3>Get in touch</h3>
                  <p className={styles.contact_address}>
                    Bangkok, Thailand
                  </p>
                  <p className={styles.contact_phone}><FaPhone/> (+66) 81 963 0344</p>
                  <br />
                  <p className={styles.contact_mail}><FaEnvelope/> champkrittamate@gmail.com</p>
              </div>

          </div>
      </div>
    </section>
  )
}

export default Contact
