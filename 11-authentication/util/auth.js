import axios from "axios";

const API_KEY = 'AIzaSyAqnwcFihpiMJywHkkRxIWH9YcykFEySis';

/**
 *
 * @param mode signUp | signInWithPassword
 * @param email
 * @param password
 * @returns {Promise<void>}
 */
const authenticate = async (mode, email, password) => {
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
  
  // console.log(response);
  return response.data.idToken;
};

export const createUser = (email, password) => {
  return authenticate('signIn', email, password);
};
export const login = (email, password) => {
  return authenticate('signInWithPassword', email, password);
};
