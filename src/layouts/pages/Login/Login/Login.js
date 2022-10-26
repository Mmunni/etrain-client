import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub} from "react-icons/fa";
const Login = () => {
    
    return (
        <div>
            <Form className='container w-50 mt-5 form-card'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <button className="mb-4 btn_1 me-auto" type="submit">
          Submit
        </button><br/>
        <Form.Text className="text-danger">
            {/* {error} */}
        </Form.Text>

        <Button  className='mb-3' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google </Button><br/>
        <Button variant="outline-secondary"><FaGithub></FaGithub> Login with Github </Button>
            </Form>
        </div>
    );
};

export default Login;