import { Request, Response, NextFunction } from 'express'
import { verify } from '@api/services/firebase'
import { User } from '@api/models/User'

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (authorization) {
    const { uid } = await verify(authorization)
    const user = await User.query().findOne({ firebase_uid: uid })
    req.params.user = user
    next()
  } else {
    res.status(401).send('unauthorized')
  }
}
