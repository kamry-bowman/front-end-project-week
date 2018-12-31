import React, { useState } from 'react';
import styled from 'styled-components';
import breakpoints from '../breakpoints';
import googleLogo from '../assets/btn_google.svg';
import Toggle from './Toggle';
import Button from './Button';

const googleRoot = process.env.NODE_ENV === 'production'
  ? 'https://kam-ln-api.herokuapp.com/'
  : 'http://localhost:8000';

const googleUrl = `${googleRoot}/auth/google`;

const StyledLogin = styled.div`
  position: relative
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${props => props.theme.font.body}

  div.decorator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.color.loginBG}
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    z-index: -1;
  }

  .main-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .header {
    height: 100%;
    width: 50%;
    z-index: 1;
    order: 1;
    text-align: end;

    @media (max-width: ${breakpoints.twoCol}) {
      height: auto;
      width: 100%;
      order: 0;
    }

    @media (max-width: ${breakpoints.oneCol}) {
      text-align: center;
    }
    
    h1 {
      white-space: pre-line;
      font-size: ${props => props.theme.dimensions.login.heading};
      color: ${props => props.theme.color.loginLogo};
      background-color: ${props => props.theme.color.loginLogoBG};
      display: inline-block;
      border-radius:  150px 0 150px 150px; 
      text-align: end;
      margin: 0;
      padding-top: 5%;
      padding-left: 10%;
      padding-right: 5%;
      padding-bottom: 10%;

      @media (max-width: ${breakpoints.twoCol}) {
    }
      @media (max-width: ${breakpoints.oneCol}) {
        padding: 10%;
        font-size: ${props => props.theme.dimensions.login.oneCol.heading};
        text-align: center;
    }
  }
}

  div.login {
    width: 50%;
    padding: 6%;
    border-radius: 100%;
    background-color: white;

    @media (max-width: ${breakpoints.twoCol}) {
      width: 100%
    }
  }
  
  h1 {
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.login.subheading};
    margin: 5%;
    text-align: center;

    @media (max-width: ${breakpoints.oneCol}) {
      font-size: ${props => props.theme.dimensions.login.oneCol.subheading};
    }
  }
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  }

  .form__row {
    margin: 15px 0px;
    & > * {
      vertical-align: middle;
    }

    label > * {
      margin: 0 10px;
    }
  }

  .form__row--buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .google-logo {
    margin: 0 10px; 
  }

  .error {
    color: ${props => props.theme.color.dangerText};
    text-align: center;
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
      username: '',
      password: '',
      isLogin: !prevState.isLogin,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    const func = isLogin ? props.login : props.register;
    func({ username, password });
  };

  const googleLogin = (event) => {
    window.location.replace(googleUrl);
  };

  return (
    <StyledLogin>
      <div className="decorator" />
      <div className="main-content">
        <div className="header">
          <h1>{'Lambda\nNotes'}</h1>
        </div>
        <div className="login">
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          <form onSubmit={submit}>
            <div className="form__row">
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
            <div className="form__row">
              <label htmlFor="password">
                {'Password'}
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleInput}
                />
              </label>
            </div>
            <div className="form__row">
              {'Login'}
              <Toggle handleToggle={handleToggle} />
              {'Register'}
            </div>
            <div className="form__row form__row--buttons">
              <Button type="submit">Submit</Button>
              {form.isLogin ? (
                <Button type="button" onClick={googleLogin}>
                  {'Sign in with Google'}
                  <div className="google-logo">
                    <img alt="" src={googleLogo} />
                  </div>
                </Button>
              ) : (
                undefined
              )}
            </div>
            <div className="form__row error">{props.error || ''}</div>
          </form>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
