import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config = {
  apiKey: "AIzaSyAXq-cGXE1v32rKDsb2dZZJPVEOrUtUGpE",
  authDomain: "ecomm-db-2a431.firebaseapp.com",
  projectId: "ecomm-db-2a431",
  storageBucket: "ecomm-db-2a431.appspot.com",
  messagingSenderId: "322472103408",
  appId: "1:322472103408:web:10d18ccaeb236ff647a135",
  measurementId: "G-VCL6M6KCMQ"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase