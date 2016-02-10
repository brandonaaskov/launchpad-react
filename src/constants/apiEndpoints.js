export const API_VERSION = 'v1'

export const BASE_URL = `/api/${API_VERSION}`

export const LOGIN = {
  method: 'post',
  payload: {
    email: '',
    password: ''
  }
}

export const GET_CURRENT_USER = {
  method: 'get',
  url: `/user`
}
