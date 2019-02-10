import * as path from 'path'
import * as express from 'express'
import { PostList } from '@frontend/components/PostList'
import { Post } from '@frontend/components/Post'
import { withHelmet } from './ssr'

const app = express()

app.use(require('cors')())
app.use(express.static(path.join(__dirname, '../build')))

const posts = [
  {
    title: 'foo',
    content: 'foofoofoo',
  },
  {
    title: 'bar',
    content: 'barbarbar',
  },
]

app.get('/posts', (_req, res) => {
  res.send(withHelmet(PostList, { posts }))
})

app.get('/posts/1', (_req, res) => {
  res.send(withHelmet(Post, { post: posts[0] }))
})

app.get('/api/posts', (_req, res) => {
  res.send(posts)
})

app.listen(20589, () => {
  console.log('listening')
})
