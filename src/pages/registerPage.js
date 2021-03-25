import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const registerUser = () => {
    // const name = nameRef.current.value;
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;

  
  };

  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            ref={nameRef}
          />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@example.com"
          ref={emailRef}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          ref={passwordRef}
        />
      </div>
      <button onClick={registerUser}>Register</button>
      <div className="register">
        <Link to="/login" className="register-link"> Quay lai </Link>
      </div>

    </div>
  );
};

export default RegisterPage;