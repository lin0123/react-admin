import React from 'react';

interface AuthTypes {
  className?: string;
  login?: boolean;
  access?: string | string[];
  children: JSX.Element | null;
}

const Auth = (props: AuthTypes) => (
  (
    <>
      {props.children}
    </>
  )
);

export default Auth;
