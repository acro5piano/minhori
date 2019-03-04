import * as React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Avatar from '@material-ui/core/Avatar'
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

const DropdownMain = styled.div`
  position: fixed;
  top: 64px;
  right: 12px;
  min-width: 200px;
  background: #fff;
`

const DropdownItem = styled.div`
  padding: 12px;
  border-bottom: solid 1px #eee;
`

type Props = WithUser & RouteComponentProps

const Dropdown = ({  }: { user: User }) => {
  return (
    <DropdownMain>
      <DropdownItem>マイページ</DropdownItem>
      <DropdownItem onClick={signOut}>ログアウト</DropdownItem>
    </DropdownMain>
  )
}

export const _Header = ({ user, history }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
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
                size="small"
                onClick={() => history.push(NEW_QUESTION_PATH)}
              >
                質問する
              </Button>
            </QuestionWrap>
          )}
          {user ? (
            <>
              <Avatar src={user.avatar_url} onClick={() => setIsOpen(true)} />
              {isOpen ? <Dropdown user={user} /> : null}
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
    </ClickAwayListener>
  )
}

export const Header = withRouter(withUser(_Header))
