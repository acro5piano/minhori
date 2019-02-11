import * as admin from 'firebase-admin'
import * as serviceAccount from '@root/firebase-adminsdk.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: 'https://minhori-dev.firebaseio.com',
})
