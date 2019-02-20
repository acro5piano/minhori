import * as Validator from 'validatorjs'
const en = require('validatorjs/src/lang/en')

Validator.setMessages('en', en)

export const validate = (input: any, rules: any): boolean =>
  new Validator(input, rules).passes() as boolean
