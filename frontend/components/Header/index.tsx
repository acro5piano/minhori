import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 64px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
`

export const Header = () => (
  <Container>
    <div>header</div>
  </Container>
)
