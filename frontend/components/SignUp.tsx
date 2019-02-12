import * as React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { Header } from '@frontend/components/Header'

const Container = styled(Card as React.SFC)`
  && {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 24px;
    margin-top: 24px;
  }
`

const ButtonWrap = styled.div`
  margin-top: 24px;
`

interface Props {
  onSignUpWithEmail: (email: string, password: string) => void
}

interface State {
  email: string
  password: string
}

export class SignUp extends React.Component<Props, State> {
  state = {
    email: '',
    password: '',
  }

  onSignUpWithEmail = () => {
    this.props.onSignUpWithEmail(this.state.email, this.state.password)
  }

  async componentDidMount() {}

  render() {
    const { email, password } = this.state
    return (
      <>
        <Header />
        <Container>
          <TextField
            label="メールアドレス"
            value={email}
            onChange={(e: any) => this.setState({ email: e.target.value })}
            fullWidth
          />
          <TextField
            label="パスワード(6文字以上）"
            value={password}
            onChange={(e: any) => this.setState({ password: e.target.value })}
            fullWidth
          />
          <ButtonWrap>
            <Button color="primary" variant="contained" onClick={this.onSignUpWithEmail}>
              新規登録
            </Button>
          </ButtonWrap>
        </Container>
      </>
    )
  }
}