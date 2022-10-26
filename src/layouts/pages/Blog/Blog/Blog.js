import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './Blog.css';


const Blog = () => {
    return (
        <div>
          <h1 className='text-center my-5'>Our Blog</h1>
            <div className="container my-5">
            <Card className='mb-4'>
      <Card.Header className='header-bg' as="h5">1. what is cors?</Card.Header>
      <Card.Body>
        <Card.Text>
        CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

        The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card className='mb-4'>
      <Card.Header className='header-bg' as="h5">2. How does the private route work?</Card.Header>
      <Card.Body>
        <Card.Text>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card className='mb-4'>
      <Card.Header className='header-bg' as="h5">3. Why are you using firebase? What other options do you have to implement authentication?</Card.Header>
      <Card.Body>
        <Card.Text>
        Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
        <br/><br/>
        Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
        </Card.Text>
      </Card.Body>
    </Card>
            <Card className='mb-4'>
      <Card.Header className='header-bg' as="h5">4. What is Node? How does Node work?</Card.Header>
      <Card.Body>
        <Card.Text>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
        <br/><br/>
        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
        </div>
    );
};

export default Blog;