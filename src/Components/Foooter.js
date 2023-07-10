import React from 'react'
import styles from './two.module.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import footericon from '../Imgs/ft1.webp'
import footericon1 from '../Imgs/ft2.webp'
import footericon2 from '../Imgs/ft3.webp'
function Foooter() {
  return (
    <>
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
    </>
  )
}
export default Foooter