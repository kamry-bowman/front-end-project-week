import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const StyledLogin = styled.div`
  position: relative
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.body}

  /* * {
    border: 1px solid red;
  } */

  div.decorator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.color.loginBG}
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    z-index: -1;
  }

  div.login {
    padding: 100px;
    border-radius: 100%;
    background-color: white;

  }
  
  h1 {
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.login.headingFontSize};
    margin: 30px;
    text-align: center;
  }
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
  }

  .form--row {
    margin: 25px 0px;
  }

`;

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    isLogin: true,
  });

  const { username, password, isLogin } = form;

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggle = () => {
    setForm(prevState => ({
      ...prevState,
      isLogin: !prevState.isLogin,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    const func = isLogin ? props.login : props.register;
    func({ username, password });
  };

  return (
    <StyledLogin>
      <div className="decorator" />
      <div className="login">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <form onSubmit={submit}>
          <div className="form--row">
            <label htmlFor="username">
              {'Username'}
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="form--row">
            <label htmlFor="password">
              {'Password'}
              <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={handleInput}
              />
            </label>
          </div>
          <div className="form--row">

            Login
            <Toggle handleToggle={handleToggle} />

            Register
          </div>
          <div className="form--row">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;
