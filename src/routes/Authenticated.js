import React from 'react';
import { Redirect } from 'react-router-dom';

const Authenticated = Component => ({ isUnauth = true, ...props }) => {
  console.log(props);
  return (
    isUnauth ?
      <Redirect from={props.location.pathname} to="/login" />
      : <Component {...props} />
    );
};


export default Authenticated;
