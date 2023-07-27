import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGnZ80o7z1Yk3L-otks07s5FWFALCVcX4',
  authDomain: 'crwn-clothing-m-db.firebaseapp.com',
  projectId: 'crwn-clothing-m-db',
  storageBucket: 'crwn-clothing-m-db.appspot.com',
  messagingSenderId: '580524838245',
  appId: '1:580524838245:web:5399428b3f05b8de8ba58c',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
