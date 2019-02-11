import * as admin from 'firebase-admin'
import * as serviceAccount from '@root/firebase-adminsdk.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: 'https://minhori-dev.firebaseio.com',
})

export function verify(token: string) {
  if (process.env.NODE_ENV === 'testing') {
    return {
      uid: 'FAKE_FIREBASE_UID',
    }
  }
  return admin.auth().verifyIdToken(token)
}
