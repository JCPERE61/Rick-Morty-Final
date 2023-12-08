import React from 'react';
import styles from './About.module.css';


function About() {
    return (

    <section className={styles.content}>

      <h5>Rick and Morty</h5>
      <div className={styles.subContents}>
        
        <div className={styles.contLeft}>

          <h6>About the series</h6>    
          <div className={styles.divisionLeft}>          
            <span className={styles.litera}>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith.<br></br><br></br>Rick and Morty was created by Justin Roiland and Dan Harmon. The duo first met at Channel 101, a non-profit monthly short film festival in Los Angeles co-founded by Harmon</span>

            <img src="./images/about-Smith-Sanchez.jpg" alt="" className={styles.imgsize}/> 

          </div>

        <div className={styles.divisionLeft}>

          <span>Mark Justin Roiland has been involved in voice acting, animating, writing, producing, and directing. <br></br><br></br> He became most known as the co-creator of Rick and Morty, for which he voiced the protagonists Rick Sanchez and Morty Smith</span>

          <img src="./images/authors.jpg" alt="" />
    
        </div>
   
        <div className={styles.divisionLeft}>

          <span>Daniel James Harmon has been involved in writing, producing, and acting. <br></br><br></br>He co-created Rick and Morty and its subsequent franchise along with Justin Roiland, and co-founded television network and website Channel 101 along with Rob Schrab.</span>

          <img src="./images/Dan Harmon.jpg" alt="" />

        </div>

      </div>

      <div className={styles.contRight}>
      <div>

<img src="./images/henry.jfif" alt="" className={styles.henrylogo}/>
<br></br>

</div>
        <h6>About the Designer</h6>
        <img src="./images/JCP1.jpg" alt="" className={styles.imageAuth}/>
        <span className={styles.litDes}>A 62 year old electrical engineer, that has worked from being a technician at Schlumberger (1983-1985) to management at the first Internet Service Provider in Ecuador:EcuaNet (1996-2002), .<br></br><br></br>Born in Spain but raised in one of the smallest country of the "Other Spain" (Hispanic-America)<br></br><br></br>Decided to explore Internet related topics and re-route his career, applied to "Soy Henry" to become a Full Stack Programmer, mainly for Backend.</span>
        

    </div> 
  </div>      

  </section>         
    );
}
export default About;