/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Index.css'
import Login from './Login';
import Register from './Register';
import '../CSS/Login.css'
import logo from '../img/logo.png';
import Button from 'react-bootstrap/Button';
import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Profil from '../img/Profile.png'
import LogOut from '../img/Logout.png'
import { Link } from 'react-router-dom';

const NavbarBucks = () => {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("LOGIN_STATUS"))
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const handleLogout = () => {
    localStorage.removeItem("LOGIN_STATUS");
    
    window.location.reload();

  }
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {loginData === null? (
          <div clasName="button" >
            <Button variant="outline-danger" margin="50px" onClick={() => setModalLoginShow(true)}>
            Login
           </Button>
           <Login
            show={modalLoginShow} Hide={()=> setModalLoginShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}
           />
            {" "}

            <Button variant="danger" onClick={() => setModalRegisterShow(true)}>
            Register
            </Button>
            <Register
              show={modalRegisterShow} Hide={() => setModalRegisterShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}
            />
          </div>

          ) : (
            <>
            <div>
            <div className='d-flex'>
              <div className='d-flex align-items-center'>
              <img src = {require ('../img/cart.png')} className="cart me-3" width="30" height="30" />
              </div>
            
      
      <div ref={ref}>
        <Button className='bg-white border border-0' onClick={handleClick}><img src = {require ('../img/Ellipse 1.png')} className="userImg" width="50" height="50" /></Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom-end"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained" className='popover' >
            <Popover.Body>
            <button className='border border-0 bg-white' > 
              <Link to="/profile">
                <img src={Profil} alt=''></img>               
              </Link>
             </button> 
            
            </Popover.Body>
            <hr></hr>
            <Popover.Body>
            <button className='border border-0 bg-white' onClick={handleLogout} > 
              <img src={LogOut} alt='' href="/"></img>  
            </button>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
      </div>
      </div>
            </>
            )
          }

        </Container>
      </Navbar>

      
    </>
  );
}

export default NavbarBucks ;