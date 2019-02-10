require('dotenv').config()

import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { loggerMiddleware } from '@api/middleware/logger'
import { router as api } from '@api/routes/api/v1'
import { router as web } from '@api/routes/web'

const app = express()

app.use(require('cors')())
app.use(express.static(path.join(__dirname, '../build')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.use('/', web)
app.use('/api/v1', api)

app.listen(20589, () => {
  console.log('listening')
})
