import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState, } from 'react'





const Register = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {
  const users = []

  const [userData, setState] = useState({
    email: "",
    password: "",
    fullname: ""
  })

  const addUserData = JSON.parse(localStorage.getItem("DATA_USER"))


  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if (addUserData === null) {
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))

    } else {
      addUserData.forEach(element => {
        users.push(element)
      })
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
    }
      console.log(users.length)
      

      setModalRegisterShow(false)
      setModalLoginShow(true)
  }

    
    return(
        <>
        
        <Modal show={show} onHide={Hide} >

        <div className="form-group">
        
            <h1>
                Register
            </h1>

            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  onChange={(e)=>{setState({...userData, email : e.target.value})}} type="email" placeholder="Enter email" name='email'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={(e)=>{setState({...userData, password : e.target.value})}} type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Control onChange={(e)=>{setState({...userData, fullname : e.target.value})}}  type="text" placeholder="Full Name" name='fullname'/>
                </Form.Group>

                <Button onClick={() => {setModalRegisterShow(false); setModalLoginShow(true)}} variant="danger" type="submit">
                    Register
                </Button>

                <p>
                <Button onClick={() => {setModalRegisterShow(false); setModalLoginShow(true)}} variant="link">Already have an account? <span>Here</span></Button>
                </p>
            </Form>

         </div>    

        </Modal>

        
       
        </>
            
       
    );
}

export default Register