import React from 'react';
import Form from 'react-bootstrap/Form';
import './Register.css';
const Register = () => {
    return (
        <div>
           <Form className='container form-card mt-5 w-75'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                     onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
            </Form.Group> */}
            <button className='btn_1' type="submit">
                Register
            </button>
            <Form.Text className="text-danger">
                {/* {error} */}
            </Form.Text>
        </Form>
        </div>
    );
};

export default Register;