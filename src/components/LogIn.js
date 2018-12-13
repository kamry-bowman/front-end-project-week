import React, { useState } from 'react';
import Toggle from './Toggle';

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    isLogin: true,
  });

  const { username, password } = form;

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submit = (event) => {
    const { username, password } = form;
    event.preventDefault();
    props.login({ username, password });
  };

  return (
    <section>
      <h1>Login</h1>
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
          <Toggle /> 
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Login;
