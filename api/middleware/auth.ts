import { Request, Response, NextFunction } from 'express'
import * as admin from 'firebase-admin'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers
  if (authorization) {
    const user = await admin.auth().verifyIdToken(authorization)
    req.params.user = user
    next()
  } else {
    res.status(401).send('unauthorized')
  }
}
