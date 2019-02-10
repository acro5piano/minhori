import { restClient as client } from '@frontend/infra/restClient'

export const QuestionApi = {
  get: () => client.GET('/posts/1'),
}
