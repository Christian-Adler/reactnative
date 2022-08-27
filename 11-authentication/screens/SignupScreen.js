import {authenticate, createUser} from "../util/auth";
import {useState} from "react";
import {Alert} from "react-native";
import AuthContent from "../components/Auth/AuthContent";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (e) {
      Alert.alert('Authentication failed', 'Could not create user. Check input or try again later.')
    }
    setIsAuthenticating(false);
  }
  
  if (isAuthenticating) {
    return <LoadingOverlay message={'Creating user...'}/>
  }
  
  return (<AuthContent onAuthenticate={signupHandler}/>);
}

export default SignupScreen;
