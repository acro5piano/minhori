import * as firebase from 'firebase/app'
import 'firebase/auth'
import { StorageKey, storage } from '@frontend/infra/storage'
import { userObservable } from '@frontend/store'
import { AuthApi } from '@frontend/services/api'

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
    userObservable.next({
      id: user.uid,
      name: user.displayName || '',
    })
    console.log(user)
  } else {
    console.log('sign out')
  }
})

export async function emailLogin(email: string, password: string) {
  await firebase.auth().createUserWithEmailAndPassword(email, password)
}

export async function facebookLogin() {
  const provider = new firebase.auth.FacebookAuthProvider()
  const result = await firebase.auth().signInWithPopup(provider)
  if (!result || !result.credential || !result.user) {
    return
  }
  const user = result.user
  console.log(user)

  await AuthApi.register({
    name: user.displayName || '',
    avatar_url: `${user.photoURL}?type=large` || '',
  })
}
