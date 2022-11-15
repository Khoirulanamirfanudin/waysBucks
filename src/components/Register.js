import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Register (){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            Register
        </Button>
        <Modal  show={show} onHide={handleClose}>

        <div className="form-group">
        
            <h1>
                Login
            </h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Control type="text" placeholder="Full Name"/>
                </Form.Group>

                <Button variant="danger" type="submit">
                    Login
                </Button>

                <p>Don't have an account? klik <span>Here</span></p>
            </Form>

         </div>    

        </Modal>
       
        </>
            
       
    );
}

export default Register