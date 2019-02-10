import { restClient as client } from '@frontend/infra/restClient'

export const QuestionApi = {
  list: () => client.GET('/questions'),
  get: () => client.GET('/questions/1'),
}
