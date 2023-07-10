import React from 'react'
import {Container,Nav,Navbar ,Button} from 'react-bootstrap';
import styles from './two.module.css';
import img1 from '../Imgs/desc.jpg'
import img2 from '../Imgs/mob.jpg'
import img3 from '../Imgs/img1.webp'



    function NavExample() {
  return (
    <>
      <Navbar className={styles.BG}>
        <Container>
          <a className={styles.logo}>wix</a>
          <Nav className="me-auto">
            <img src={img1} className={styles.img1}></img>
            <Nav.Link href="|" >  |</Nav.Link>
            <img src={img2} className={styles.mobimg}></img>
            <p className={styles.home}>Reo  Amazing world enjoy your own way</p>
            <Nav.Link href="#search"><button className={styles.search}>Search</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar className={styles.naav2}>
        <Container>
          <Nav className={styles.nav2}>
            <Nav.Link href="/"className={styles.navelement}>Home</Nav.Link>
            <Nav.Link href="/rio"className={styles.navelement1}>Rio</Nav.Link>
            <Nav.Link href="/contact"className={styles.navelement2}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default NavExample