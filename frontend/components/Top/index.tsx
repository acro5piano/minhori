import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { asset } from '@shared/asset'
import { Question } from '@frontend/entities/Question'
import { Tag } from '@frontend/entities/Tag'
import { QuestionCard } from '@frontend/components/Top/QuestionCard'

const TopImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${asset('/static/top.jpeg')});
  background-repeat-x: no-repeat;
  background-position: center;
`

const TopImageInner = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 100px 12px 0;
`

const Advocacy = styled.h1`
  color: #fff;
  font-size: 24px;
`

const SubAdvocacy = styled.h3`
  color: #fff;
  font-size: 14px;
  margin-top: 24px;
`

const Questions = styled.div`
  margin-top: 24px;
`

const ContentContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 12px;
`

const QuestionContainer = styled.div`
  border: solid 1px #eee;
  border-radius: 3px;
  background: #fff;
  padding: 12px;
  margin-top: 12px;
`

interface Props {
  questions: Question[]
  tags: Tag[]
}

export const Top = ({ questions, tags }: Props) => (
  <React.Fragment>
    <Helmet>
      <title>
        ワーキングホリデーの日本最大級口コミ・コミュニティサイト 【みんなのワーキングホリデー】
      </title>
    </Helmet>
    <TopImage>
      <TopImageInner>
        <Advocacy>人生は、ワーキングホリデーで広がる。</Advocacy>
        <SubAdvocacy>
          ワーキングホリデーの体験は、人生を大きく変える可能性があります。
          <br />
          海外で知り合った友人、就業体験、そして現場で学んだ語学力。
          <br />
          あなたの一生の宝物になるでしょう。
        </SubAdvocacy>
      </TopImageInner>
    </TopImage>
    <ContentContainer>
      <Grid container spacing={16}>
        <Grid item sm={12} md={8}>
          <Questions>
            {questions.map(question => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </Questions>
        </Grid>
        <Grid item sm={12} md={4}>
          <Questions>
            {tags.map(tag => (
              <QuestionContainer key={tag.id}>
                <div>{tag.name}</div>
                <div>{tag.questionCount}</div>
              </QuestionContainer>
            ))}
          </Questions>
        </Grid>
      </Grid>
    </ContentContainer>
  </React.Fragment>
)
