import { signInWithGooglePopup } from '../../../utils/firebase/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }
  return (
    <div>
      <h1>Sign IN Page</h1>
      <button onClick={logGoogleUser}>sign in with pop up</button>
    </div>
  )
}

export default SignIn
