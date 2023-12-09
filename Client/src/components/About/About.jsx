import React from 'react';
import styles from './About.module.css';

import {info} from '../../assets/langInfo';

function About({i}) {

   return (

    <section className={styles.content}>

      <h5>{info.about.titleGen[i]}</h5>
      <div className={styles.subContents}>
        
        <div className={styles.contLeft}>

          <h6>{info.about.titleSeries[i]}</h6>    
          <div className={styles.divisionLeft}>          
            <span className={styles.litera}>{info.about.descr_One[i]}<br></br><br></br>{info.about.descr_Two[i]}</span>

            <img src="./images/about-Smith-Sanchez.jpg" alt="" className={styles.imgsize}/> 

          </div>

        <div className={styles.divisionLeft}>

        <span>{info.about.mark1[i]} <br></br><br></br> {info.about.mark2[i]}</span>

          <img src="./images/authors.jpg" alt="" />
    
        </div>
   
        <div className={styles.divisionLeft}>

          <span>{info.about.harmon1[i]} <br></br><br></br>{info.about.harmon2[i]}.</span>

          <img src="./images/Dan Harmon.jpg" alt="" />

        </div>

      </div>

      <div className={styles.contRight}>
      <div>

<img src="./images/henry.jfif" alt="" className={styles.henrylogo}/>
<br></br>

</div>
        <h6>{info.about.titleDesigner[i]}</h6>
        <img src="./images/JCP1.jpg" alt="" className={styles.imageAuth}/>
        <span className={styles.litDes}>{info.about.designer1[i]}<br></br><br></br>{info.about.designer2[i]}<br></br><br></br>{info.about.designer3[i]}</span>
               

    </div> 
  </div>      

  </section>         
    );
}
export default About;