require('dotenv').config()

// import '@shared/firebase'
import '@api/services/firebase'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { loggerMiddleware } from '@api/middleware/logger'
import { router as api } from '@api/routes/api/v1'
import { router as web } from '@api/routes/web'

const app = express()

app.use(require('cors')())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.get('/health', (_req, res) => {
  res.send('ok')
})
app.use('/api/v1', api)
app.use('/', web)

app.use(express.static(path.join(__dirname, '../build')))

app.listen(20589, () => {
  console.log('listening')
})
