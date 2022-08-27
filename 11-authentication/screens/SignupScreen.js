import {authenticate, createUser} from "../util/auth";
import {useState} from "react";
import TransparentLoadingOverlay from "../components/ui/TransparentLoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await createUser(email, password);
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
