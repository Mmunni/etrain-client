import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
const Login = () => {

    const navigate = useNavigate()
    const {signIn, providerLogin} = useContext(AuthContext)
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const location = useLocation()
      const from = location.state?.from?.pathname || '/';
    
    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
             setError('');
              navigate(from, {replace: true});
          })
          .catch((error) => {
            console.error(" error is ", error);
             setError(error.message);
          });
      };

      
    const handelGoogleSignin = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handelGithubSignin = () => {
      providerLogin( githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.error('error: ', error)
      });
    }
    return (
        <div>
            <Form onSubmit={handelLogin} className='container w-75 mt-5 form-card'>
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
        <button className="mb-2 btn_1 me-auto" type="submit">
          Submit
        </button><br/>
        <Form.Text className="text-danger">
             {error} 
        </Form.Text><br/>
        <small><p>Didn't have an Account <Link to='/register'>Register</Link></p></small>
        <ButtonGroup vertical className='ms-auto'>
        <Button onClick={handelGoogleSignin} className='mb-3' variant="outline-secondary"><FaGoogle></FaGoogle> Login with Google </Button>
        <Button onClick={handelGithubSignin} variant="outline-secondary"><FaGithub></FaGithub> Login with Github </Button>
        </ButtonGroup>
        
            </Form>
        </div>
    );
};

export default Login;