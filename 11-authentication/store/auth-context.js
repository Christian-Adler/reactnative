import {createContext, useState} from "react";

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {
  },
  logout: () => {
  },
});

export default
const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(false);
  
  const authenticate = (token) => {
    setAuthToken(token);
  };
  const logout = () => {
    setAuthToken(null);
  };
  
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
