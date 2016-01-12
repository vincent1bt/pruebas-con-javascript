import request from 'superagent'

export default class Api {
  constructor(url){
    this.url = url
  }
  get(callback){
    Promise.resolve(request.get(this.url))
      .then((data) => {
       callback(data.body)
      })
  }
  get_one(id, callback){
    Promise.resolve(request.get(`${this.url}/${id}`))
      .then((data) => {
        callback(data.body)
      })
  }
}