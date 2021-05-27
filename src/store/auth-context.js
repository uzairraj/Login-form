import React from 'react';

//this is not a component this is object and we export this and use this in other component
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;