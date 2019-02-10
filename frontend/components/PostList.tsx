import * as React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Post as IPost } from '@frontend/entities/Post'

const Container = styled.div`
  background: orange;
  margin-top: 12px;
`

const Title = styled.div`
  color: #333;
`

export const PostList = ({ posts }: { posts: IPost[] }) => (
  <div>
    <Helmet>
      <title>Welcome to post list</title>
    </Helmet>
    {posts.map(post => (
      <Container key={post.title}>
        <Title>{post.title}</Title>
      </Container>
    ))}
  </div>
)
