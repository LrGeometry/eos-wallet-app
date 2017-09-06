import React from 'react';
import { Redirect } from 'react-router-dom';

const Authenticated = Component => ({ auth = false, invert = false, ...props }) => {
  const redirect = !invert ? !auth : invert && auth;

  console.log(auth);

  return (
    redirect ?
      <Redirect from={props.location.pathname} to="/login" />
      : <Component {...props} />
  );
};


export default Authenticated;
