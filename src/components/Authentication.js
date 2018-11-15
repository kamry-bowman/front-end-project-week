import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { authenticate, register, login } from '../actions/index';

function withAuthentication(Component) {
  const AuthenticatedComponent = (props) => {
    useEffect(() => {
      props.authenticate();
    });

    if (!props.user) {
      return <Login login={props.login} register={register} />;
    }
    return <Component {...props} user={props.user} />;
  };

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(
    mapStateToProps,
    { authenticate, register, login },
  )(AuthenticatedComponent);
}

export default withAuthentication;
