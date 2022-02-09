const axios = require('axios')

class Suscripcion {
  static getSuscripciones() {
    return axios.get('https://ejemplos-dc1c1.firebaseio.com/angular-sngular/notis/angel.json')
      .then((resp) => {
        console.log(resp)
        return Object.values(resp.data)
      })
  }
}

module.exports = Suscripcion