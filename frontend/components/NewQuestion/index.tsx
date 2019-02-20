import * as React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
/* import Grid from '@material-ui/core/Grid' */
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
/* import { asset } from '@shared/asset' */
import {} from '@frontend/entities/Question'
import { Tag } from '@frontend/entities/Tag'
import { CreateQuestionParams } from '@frontend/entities/Question'

const ContentContainer = styled.div`
  max-width: 1024px;
  margin: 24px auto 0;
  border: solid 1px #eee;
  border-radius: 3px;
  background: #fff;
  padding: 12px;
`

const TitleWrap = styled.div`
  max-width: 400px;
`

const ContentWrap = styled.div`
  margin-top: 24px;
`

const ButtonWrap = styled(ContentWrap)`
  text-align: center;
  margin-bottom: 24px;
`

interface Props {
  tags: Tag[]
  onSubmit: (params: CreateQuestionParams) => Promise<void>
}

export const NewQuestion = ({ onSubmit }: Props) => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')

  const submit = () => onSubmit({ title, content, tags: [] })

  return (
    <React.Fragment>
      <Helmet>
        <title>
          質問する - ワーキングホリデーの日本最大級口コミ・コミュニティサイト
          【みんなのワーキングホリデー】
        </title>
      </Helmet>
      <ContentContainer>
        <TitleWrap>
          <TextField
            fullWidth
            label="タイトル"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </TitleWrap>
        <ContentWrap>
          <TextField
            fullWidth
            multiline
            label="質問内容"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={8}
            rowsMax={24}
          />
        </ContentWrap>
        <ButtonWrap>
          <Button variant="contained" color="primary" onClick={submit}>
            質問する
          </Button>
        </ButtonWrap>
      </ContentContainer>
    </React.Fragment>
  )
}
