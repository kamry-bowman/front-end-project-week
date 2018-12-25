import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './LogIn';
import { authenticate, register, login } from '../actions/index';

function Authentication(props) {
  useEffect(
    () => {
      props.authenticate();
    },
    [props.user],
  );

  if (!props.user) {
    return <Login login={props.login} register={props.register} error={props.error} />;
  }
  console.log(props.children);
  return props.children;
}

const mapStateToProps = ({ auth }) => {
  console.log(auth);
  return auth;
};

export default connect(
  mapStateToProps,
  { authenticate, register, login },
)(Authentication);
