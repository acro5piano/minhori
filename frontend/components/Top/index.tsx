import * as React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Header } from '@frontend/components/Header'

const Container = styled.div`
  display: flex;
  background: #fff;
`

export const Top = () => (
  <React.Fragment>
    <Container>
      <Helmet>
        <title>
          ワーキングホリデーの日本最大級口コミ・コミュニティサイト 【みんなのワーキングホリデー】
        </title>
      </Helmet>
      <Header />
    </Container>
  </React.Fragment>
)
