import config from '../config'
import TokenService from './token-service'

const ApiLanguageService = {
  getLanguage(id) {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      user: JSON.stringify(id),
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  },
  getLanguageHead(id) {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      user: JSON.stringify(id),
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  },
  submitAnswer(guess, original, language_id) {
    const body = {guess, original, language_id}
    console.log(body)
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(res => (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
  }
}

export default ApiLanguageService;