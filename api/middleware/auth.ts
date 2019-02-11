import { Request, Response, NextFunction } from 'express'
import * as admin from 'firebase-admin'
import { User } from '@api/models/User'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (authorization) {
    const user = await admin.auth().verifyIdToken(authorization)
    req.params.user = user
    const hoge = await User.query().findOne({ firebase_uid: user.uid })
    console.log(hoge)
    next()
  } else {
    res.status(401).send('unauthorized')
  }
}
