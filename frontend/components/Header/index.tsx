import * as React from 'react'
import { LOGIN_PATH, TOP_PATH, SIGNUP_PATH, NEW_QUESTION_PATH } from '@frontend/Routes'
import { withRouter, RouteComponentProps } from 'react-router'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { withUser, WithUser } from '@frontend/store'
import { User } from '@frontend/entities/User'
import { signOut } from '@frontend/services/firebase'
import { asset } from '@shared/asset'

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

const QuestionWrap = styled.div`
  margin-right: 14px;
`

const LogoWrapper = styled.div`
  cursor: pointer;
`

type Props = WithUser & RouteComponentProps

export const _Header = ({ user, history }: Props) => (
  <Container>
    <LogoWrapper onClick={() => history.push(TOP_PATH)}>
      <img src={asset('/static/logo.png')} width={120} />
    </LogoWrapper>
    <Flex>
      {history.location.pathname !== NEW_QUESTION_PATH && (
        <QuestionWrap>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(NEW_QUESTION_PATH)}
          >
            質問する
          </Button>
        </QuestionWrap>
      )}
      {user ? (
        <>
          <span>{(user as User).name}</span>
          <span onClick={signOut}>ログアウト</span>
        </>
      ) : (
        <>
          <Button variant="text" onClick={() => history.push(LOGIN_PATH)}>
            ログイン
          </Button>
          <RegisterWrap>
            <Button variant="text" onClick={() => history.push(SIGNUP_PATH)}>
              新規登録
            </Button>
          </RegisterWrap>
        </>
      )}
    </Flex>
  </Container>
)

export const Header = withRouter(withUser(_Header))
