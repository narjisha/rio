import { React, useState as UseState, useState, } from 'react';
import styles from './three.module.css';
import {Container,Nav,Navbar ,} from 'react-bootstrap';
import rio2 from '../Imgs/a.webp'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Foootter from './Foooter'; 
import ReactDOM from 'react-dom/client';

function contact() {

  const [name, setName] = UseState("");
  const [email, setEmail] = UseState("");
  const [message, setMessage] = UseState("");
  const[nameError,setNameError]=UseState("")
  const[emailError,setEmailError]=UseState("")
  const[messageError,setMessageError]=UseState("")
  const handleButtonClicked = async (e) => { 
    if (name === '')
    {
      setNameError('Name is required!');
      console.log(nameError)
    }
    if (email === '')
    {
     setEmailError('email is required!');
     console.log(emailError)
    } 
    if (message === '')
    {
    setMessageError('message is required!');
    console.log(messageError)
    }

     console.log(name);
     console.log(email)
     console.log(message)
  }


  return (
    <div className={styles.Fdiv}>
      <div className={styles.maindiv2}>
      <div className={styles.first}>
      <div  className={styles.div1}>
        <Navbar className={styles.naav2}>
        <Container>
          <Nav className={styles.nav2}>
            <Nav.Link href="/"className={styles.navelement}>Home</Nav.Link>
            <Nav.Link href="/Rio"className={styles.navelement3}>Rio</Nav.Link>
            <Nav.Link href="/contact"className={styles.navelement4}>Contact</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <h2 className={styles.welcome}>Contact Us</h2>
        <img className={styles.rioimg2} src={rio2}></img>
        </div>
        <div className={styles.lastfooter}>
            <div className={styles.div3}><h1 className={styles.para1}>Ask us<br/>Anything!<hr className={styles.hr1}/></h1></div>
            <div className={styles.div4}>
                 <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  value={"name"}
                  className={styles.nameinput}
                  >
                 <Form.Control type="Name" placeholder="name@example.com" onChange={(e) => setName(e.target.value)} />
                 {nameError && <span className={styles.error}>{nameError}</span>}
                 </FloatingLabel>

                 <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  value={"email"}
                  className={styles.emailinput}
                  >
                 <Form.Control type="email"  placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                 {emailError && <span className={styles.error}>{emailError}</span>}
                 </FloatingLabel>

                 <FloatingLabel
                  controlId="floatingInput"
                  value={'message'}
                  label="Type your meassage here..."
                  className={styles.textinput}
                  >
                 <Form.Control type="text" className={styles.textinput} onChange={(e) => setMessage(e.target.value)}/>
                 {messageError &&<span className={styles.error}>{messageError}</span>}
                 </FloatingLabel>
                 
                 <button className={styles.map} onClick={(e) =>handleButtonClicked()}>submit</button>
            </div>
        </div>
        </div>
      </div>
      <div className={styles.footerdiv}>
      <Foootter/>
      </div>
    </div>
    
  )
}

export default contact