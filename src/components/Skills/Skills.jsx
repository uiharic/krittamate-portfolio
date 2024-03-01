import React from 'react';
import styles from './Skills.module.css';
import { SiPython, SiPandas, SiScikitlearn, SiTensorflow, SiMysql, SiMicrosoftexcel, SiPowerbi, SiRstudio, SiNumpy, SiPytorch, SiMongodb, SiTableau, SiGooglecloud } from 'react-icons/si';

function Skills() {
  return (
    <section id="skills" className={styles.skills_section}>
      <div className={styles.skills_con}>
          <h3 className={styles.skills_title}>Skill Set</h3>
          <p className={styles.skills_des}>You can click on each icon directly</p>
          <ul className={styles.skills_list}>
              <li>
                <a href="https://www.mysql.com/">
                  <SiMysql />
                </a>
              </li>
              <li>
                <a href="https://www.microsoft.com/th-th/microsoft-365/excel">
                  <SiMicrosoftexcel />
                </a>
              </li>
              <li>
                <a href="https://www.tableau.com">
                  <SiTableau />
                </a>
              </li>
              <li>
                <a href="https://www.microsoft.com/en-us/power-platform/products/power-bi">
                  <SiPowerbi />
                </a>
              </li>
              <li>
                <a href="https://posit.co/download/rstudio-desktop/">
                  <SiRstudio />
                </a>  
              </li>
              <li>
                <a href="https://cloud.google.com">
                  <SiGooglecloud />
                </a>
              </li>
              <li>
                <a href="https://www.python.org/">
                  <SiPython />
                </a>
              </li>
              <li>
                <a href="https://pandas.pydata.org/docs/reference/index.html">
                  <SiPandas />
                </a>  
              </li>
              <li>
                <a href="https://numpy.org/">
                  <SiNumpy />
                </a>
              </li>
              <li>
                <a href="https://scikit-learn.org/stable/">
                  <SiScikitlearn />
                </a>
              </li>
              <li>
                <a href="https://www.tensorflow.org/">
                  <SiTensorflow />
                </a>
              </li>
              <li>
                <a href="https://pytorch.org/">
                  <SiPytorch />
                </a>
              </li>
          </ul>
      </div>
    </section>
  );
}

export default Skills;