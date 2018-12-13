import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.body}
  
  h1 {
    font-family: ${props => props.theme.font.heading}
  }
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  }

  const submit = (event) => {
    event.preventDefault();
    const func = isLogin ? props.login : props.register;
    func({ username, password });
  };

  return (
    <StyledLogin>
      <h1>
        {isLogin ? 'Login' : 'Register'}
      </h1>
      <form onSubmit={submit}>
        <label htmlFor="username">
          {'Username'}
          <input type="text" id="username" name="username" value={username} onChange={handleInput} />
        </label>
        <label htmlFor="password">
          {'Password'}
          <input type="text" id="password" name="password" value={password} onChange={handleInput} />
        </label>
        <div>
          Login<Toggle handleToggle={handleToggle} />Register
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledLogin>
  );
};

export default Login;
