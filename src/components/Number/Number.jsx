import React from 'react'
import styles from './Number.module.css'


function Number() {
  return (
    <div className={styles.number_con}>
        <div className={styles.number_items}>
          <h3>3.64</h3>
          <p>CGPA</p>

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
  )
}

export default Number
