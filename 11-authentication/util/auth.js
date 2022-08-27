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
  
  console.log(response);
};

export const createUser = async (email, password) => {
  await authenticate('signIn', email, password);
};
export const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password);
};
