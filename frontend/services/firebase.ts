import * as firebase from 'firebase/app'
import 'firebase/auth'
import { StorageKey, storage } from '@frontend/infra/storage'

const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    const token = await user.getIdToken()
    storage.set(StorageKey.AUTH_TOKEN, token)
  } else {
    console.log('sign out')
  }
})

export function emailLogin(email: string, password: string) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      if (!result || !result.credential) {
        return
      }
      const token = result.credential
      const user = result.user
      console.log(user)
      console.log(token)
    })
}
