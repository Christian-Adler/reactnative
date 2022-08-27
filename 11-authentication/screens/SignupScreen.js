import {authenticate, createUser} from "../util/auth";
import {useState} from "react";
import TransparentLoadingOverlay from "../components/ui/TransparentLoadingOverlay";
import {Alert} from "react-native";

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
  
  return (
    <>
      <TransparentLoadingOverlay message={'test Message'}/>
    </>);
}

export default SignupScreen;
