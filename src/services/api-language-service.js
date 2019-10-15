import config from '../config'
import TokenService from './token-service'

const ApiLanguageService = {
  getLanguage(id) {
    console.log('getting')
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      user: JSON.stringify(id),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default ApiLanguageService;