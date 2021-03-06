import { restClient as client } from '@frontend/infra/restClient'
import { CreateQuestionParams } from '@frontend/entities/Question'

export const QuestionApi = {
  list: () => client.GET('/questions'),
  get: (id: string) => client.GET(`/questions/${id}`),
  create: (params: CreateQuestionParams) => client.POST('/questions', params),
}

export const TagApi = {
  list: () => client.GET('/tags'),
  get: () => client.GET('/tags/1'),
}

interface RegisterParams {
  name: string
  avatar_url?: string
}

export const AuthApi = {
  me: () => client.GET('/auth/me'),
  register: (params: RegisterParams) => client.POST('/auth/register', params),
}
