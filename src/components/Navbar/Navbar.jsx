import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa6'

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle(){
    setToggle(!isToggled) //false + false = true
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
            <div className={styles.logo}>
                <a href="#">ChampKrittamate</a>
            </div>

            <ul>
                <li><a href="#" onClick={() => scrollToSection('skills')}>Skill</a></li>
                <li><a href="#" onClick={() => scrollToSection('certificate')}>Certificate & Project</a></li>
                <li><a href="#" onClick={() => scrollToSection('hallofframe')}>Achivement</a></li>
            </ul>

            <div className={styles.button}>
                <a href="#" onClick={() => scrollToSection('contact')}>Contact me</a>
            </div>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
                <li><a href="#" onClick={() => scrollToSection('skills')}>Skill</a></li>
                <li><a href="#" onClick={() => scrollToSection('certificate')}>Certificate & Project</a></li>
                <li><a href="#" onClick={() => scrollToSection('hallofframe')}>Achivement</a></li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#" onClick={() => scrollToSection('contact')}>Contact me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
