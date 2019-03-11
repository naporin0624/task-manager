import axios from 'axios'
const debug = process.env.NODE_ENV != 'production'

const onSuccess = (res) => {
  if (debug) console.log(' << ' + JSON.stringify(res.data))
  return Promise.resolve(res)
}

const onError = (res) => {
  console.log(res)
  throw new Error('API error')
}

export default {
  get: (url, params) => {
    if (debug) console.log('GET: ' + url + ' >> ' + JSON.stringify(params))
    return axios.get(url, {
      params: params
    }).then(onSuccess).catch(onError)
  },
  post: (url, params) => {
    if (debug) console.log('POST: ' + url + ' >> ' + JSON.stringify(params))
    return axios.post(url, params).then(onSuccess).catch(onError)
  }
}
