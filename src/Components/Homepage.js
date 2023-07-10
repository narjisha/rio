import React from 'react'
import styles from './two.module.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import img3 from '../Imgs/img1.webp'
import img4 from '../Imgs/img2.webp'
import img5 from '../Imgs/img3.webp'
import img6 from '../Imgs/img4.webp'
import img7 from '../Imgs/img5.webp'
import footericon from '../Imgs/ft1.webp'
import footericon1 from '../Imgs/ft2.webp'
import footericon2 from '../Imgs/ft3.webp'
import a from '../Imgs/a.webp'
import Navbar from './Navbar';

function Homepage() {
  return (
    <>
 <Navbar />
<div className={styles.div1}>
        <div className={styles.homediv}>
             <img src={img3} className={styles.img2}></img>
             <img className={styles.a} src={a}></img><p className={styles.b}>Be my gust</p><img className={styles.c} src={a}></img>
             <h1 className={styles.welcome}>WELCOME TO RIO</h1>
        </div>
        {/* 1st part */}
     <div className={styles.part1}>
            {/* div1 */}
        <div className={styles.div2}>
            <p className={styles.para1}>A Home in the Heart of the City<hr className={styles.hr}/></p>
            <p className={styles.para2}>Stay in a beautiful highrise in Ipanema just off the beach close to many world-class cafes and restaurants.</p>
            <p  className={styles.para3}>Enjoy Bossa Nova with a cold beer!</p>
        </div>
        {/* div2 */}
        <div className={styles.div2}>
            <div className={styles.div3}>
                <p className={styles.para4}>Our</p>
                <p className={styles.para5}>Apartment<hr className={styles.hr1}/></p>             
            </div>
            
            <div className={styles.div4}><img src={img4} className={styles.img4}></img>
            </div>
        </div>
        {/* div3 */}
        <div className={styles.maindiv3}>
            <div>
                <img src={img5}className={styles.img5}></img>
            </div>
            <div className={styles.div6}>
                <p className={styles.para6}>The apartment is spacious with high ceilings, large windows, an open</p>
                <p className={styles.para7}>balcony and a beautiful view of the beach. Stay cool with central A/C</p>
                <p className={styles.para7}>and wind-down comfortably in the queen sized bedroom.</p>
            </div>
        </div>
     </div>
    
    {/* 2nd part div */}
    <div className={styles.part2}>
               {/* div 1*/}
                <div className={styles.div2}>
                    <div className={styles.div7}>
                        <img className={styles.img8} src={img6}></img>
                    </div> 
                    <div className={styles.div8}>
                        <p className={styles.para8}>Location<hr className={styles.hr2}></hr></p>
                    </div>                  
                </div>
                {/* div2 */}
                <div className={styles.div9 }>
                    <p className={styles.para9}>Conveniently located just opposite Leblon Beach in Ipanema, our apartment will</p>
                    <p className={styles.para10}>sweep you into the charm and excitements of Rio! Dine at one of our</p>
                    <p className={styles.para10}>neighborhood’s many world-renowned restaurants, enjoy fresh-squeezed juices</p>
                    <p className={styles.para10}>from one of the colourful stalls along the beach, and don’t miss live bossy-nova</p>
                    <p className={styles.para10}>show in one of the local bars.</p>
                    <button className={styles.mapbtn}>VIEW MAP</button>
                </div>
                {/* div3 */}
                <div  className={styles.div9 }>
                    <div className={styles.div10}> 
                        <img src={img7} className={styles.img9}></img>
                    </div>
                    <div className={styles.div11}>
                        <p className={styles.para11}>About Camila & Tiago <hr className={styles.hr3}/></p>
                        <p className={styles.para12}>Hi, my name is Camila and I’m a nutritionist from the south of Brazil. I moved to the beautiful Ipanema neighborhood two years ago with my husband, Tiago. We live in a homie highrise's just off the Leblon Beach but in the summer we travel!</p>
                    </div>
               </div>
               {/* div4 */}
               <div  className={styles.ftdiv }>
                <div className={styles.lastdiv}>
                 <a href='#' className={styles.footercontent1}>Contact Us</a>
                 <a  href='#' className={styles.footercontent1}> Follow Us</a>
                  <a  href='#' className={styles.footercontent1}>Subscribe for Updates & Offers</a>  
                  <p className={styles.footercontent2}>Ask us anything! We’re here to .<img className={styles.ft1} src={footericon}></img><img src={footericon1}></img><img src={footericon2}></img> 
                  <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className={styles.emailinput}
                  >
                 <Form.Control type="email" placeholder="name@example.com" />
                 </FloatingLabel>
                 <br/> answer any questions you have<p className={styles.footercontent3}>
                 <button  className={styles.emailinput1}>Subscribe Now</button>
                 <br/>Email: info@mysite.com</p> </p>
                </div>
              </div>
   </div>

 </div>
 </>
  )
}
export default Homepage