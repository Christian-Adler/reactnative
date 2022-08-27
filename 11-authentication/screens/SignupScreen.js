import {authenticate, createUser} from "../util/auth";
import {useContext, useState} from "react";
import {Alert} from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const authCtx = useContext(AuthContext);
  
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert('Authentication failed', 'Could not create user. Check input or try again later.')
      setIsAuthenticating(false);
    }
  }
  
  if (isAuthenticating) {
    return <LoadingOverlay message={'Creating user...'}/>
  }
  
  return (<AuthContent onAuthenticate={signupHandler}/>);
}

export default SignupScreen;
