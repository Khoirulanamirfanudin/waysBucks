import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import '../CSS/Login.css'

const Login = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {

    const users = []
    
    const [userLogin, setState] = useState({
      email: "",
      password: "",
    })
    
    let storage = JSON.parse(localStorage.getItem("DATA_USER"))
    
    const handleOnSubmit = (e) => {
      e.preventDefault();
      storage.forEach(element => {
        if (userLogin.email === element.email && userLogin.password === element.password ) {
          users.push(userLogin)
          localStorage.setItem("LOGIN_STATUS", JSON.stringify(users))
          setModalLoginShow(false)
        } else {
          console.log(users)
        }
        
      });
    } 

    
    return(
        <>
     
        <Modal show={show} onHide={Hide}>
        
        <div className="form-group">
        
            <h1>
                Login
            </h1>

            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={(e)=>{setState({...userLogin, email : e.target.value})}} type="email" placeholder="Enter email" name='email' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={(e)=>{setState({...userLogin, password : e.target.value})}} type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Login
                </Button>

                <p>
                <Button onClick={() => {setModalLoginShow(false); setModalRegisterShow(true)}} variant="link">Don't hava an account? Klick <span>Here</span></Button>
                </p>
            </Form>

         </div>    

        </Modal>
       
        </>
            
       
    );
}

export default Login