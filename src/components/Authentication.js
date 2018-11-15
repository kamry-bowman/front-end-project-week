import React, { useState, useEffect } from 'react';
import connect from 'redux-react-dom';
import { authenticate, register, login } from '../actions/index';
import axios from 'axios';

function Authentication(Component) {
  useEffect(() => {
    props.authenticate();
    }

  return (props) => {
    if (props.user) {
      return <Component {...props} user={props.user} />;
    } else {
      return <Login login={props.login} register={register} />
    }
  };
}

const mapStateToProps = (state) => {
  return { state.auth };
  }

export default connect(mapStateToProps, { authenticate, register, login })(Authentication);
