import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { LOGIN_PATH, TOP_PATH, SIGNUP_PATH } from '@frontend/Routes'
import { withUser, WithUser } from '@frontend/store'
import { User } from '@frontend/entities/User'
import { signOut } from '@frontend/services/firebase'

const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 64px;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: solid 1px #eee;
`

const Flex = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`

const RegisterWrap = styled.div`
  margin-left: 14px;
`

const LogoWrapper = styled.div`
  cursor: pointer;
`

type Props = WithUser & RouteComponentProps

export const _Header = ({ user, history }: Props) => (
  <Container>
    <LogoWrapper onClick={() => history.push(TOP_PATH)}>
      <img src="data:image/png;base64,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" />
    </LogoWrapper>
    {user ? (
      <Flex>
        <span>{(user as User).name}</span>
        <span onClick={signOut}>ログアウト</span>
      </Flex>
    ) : (
      <Flex>
        <Button variant="text" onClick={() => history.push(LOGIN_PATH)}>
          ログイン
        </Button>
        <RegisterWrap>
          <Button variant="contained" color="primary" onClick={() => history.push(SIGNUP_PATH)}>
            新規登録
          </Button>
        </RegisterWrap>
      </Flex>
    )}
  </Container>
)

export const Header = withRouter(withUser(_Header))
