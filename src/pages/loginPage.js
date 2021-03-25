import React from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import makeToast from '../toaster';
import axios from 'axios';

const LoginPage = () => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post('https://6054ba8cd4d9dc001726dde7.mockapi.io/api/v1/login', {
        email,
        password,
      })
      .then((response) => {
        makeToast('success', 'login success');
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
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
        <button onClick={loginUser}>Login</button>
        <div className="register">
          <Link to="/register" className="register-link">
            {' '}
            Register{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
