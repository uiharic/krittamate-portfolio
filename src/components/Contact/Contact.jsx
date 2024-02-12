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
                  <p><FaPhone/> (+66) 81 963 0344</p>
                  <br />
                  <p><FaEnvelope/> champkrittamate@gmail.com</p>
              </div>
              <div className={styles.contact_form}>
                <form action="">
                  <div className={styles.input_group}>
                    <div>
                      <label htmlFor="first name">First Name</label>
                      <input type="text" placeholder='eg. Krittamate'/>
                    </div>
                    <div>
                      <label htmlFor="last name">Last Name</label>
                      <input type="text" placeholder='eg. Payakkachon'/>
                    </div>
                  </div>
                  <label htmlFor="email address">Email Address</label>
                  <input type="email" placeholder='eg. hellothere@gmail.com'/>
                  <label htmlFor="message">Message</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                  <button type='submit'>Submit</button>
                </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Contact
