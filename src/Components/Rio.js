import React from 'react'
import {Container,Nav,Navbar ,} from 'react-bootstrap';
import styles from './three.module.css';
import rio1 from '../Imgs/rio-nav.webp'
import rio2 from '../Imgs/a.webp'
import rio3 from '../Imgs/rio-home.webp'
import Foooter from './Foooter';

function Rio() {
  return (
    <div className={styles.Fdiv}>
    <div className={styles.maindiv}>
      </div>
    <div className={styles.first}>
      <div  className={styles.div1}>
        <Navbar className={styles.naav2}>
        <Container>
          <Nav className={styles.nav2}>
            <Nav.Link href="/"className={styles.navelement}>Home</Nav.Link>
            <Nav.Link href="/Rio"className={styles.navelement1}>Rio</Nav.Link>
            <Nav.Link href="/contact"className={styles.navelement2}>Contact</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <h2 className={styles.welcome}>Welcom to Rio</h2>
        <img className={styles.rioimg2} src={rio2}></img>
        </div>
        <div className={styles.div2}>
            <div className={styles.div3}><h1 className={styles.para1}>The<br/>Marvelous<br/>City<hr className={styles.hr1}/></h1></div>
            <div className={styles.div4}><p className={styles.para1}>Create memories of a lifetime in one of the most beautiful cities in the world - Rio de Janeiro. Relax on gorgeous white sandy beaches, explore a cultural hub of art and entertainment, or check out the many famous landmarks around the city.</p><button className={styles.map}>VIEW MAP</button></div>
        </div>
        <div className={styles.div2}>
            <div className={styles.div3}><h1 className={styles.para1}>The<br/>Games<hr className={styles.hr1}/></h1></div>
            <div className={styles.div4}><p className={styles.para1}>Be where the action is. Witness 10,500 athletes from around the world compete in 306 medal events. Celebrate the wins and cheer your nation on. When it comes to The Games, you’ll want to be there. Check the official Games website for updates on events and locations</p></div>
        </div>
        <div className={styles.div2}>
          <img src={rio3}></img>
        </div>
    </div>
     <Foooter/>
    </div>
  )
}

export default Rio