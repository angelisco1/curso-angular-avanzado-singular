const axios = require('axios')

class Tarea {
  constructor(titulo, completada, id = null) {
    this.titulo = titulo
    this.completada = completada
    this.id = id
  }

  save() {
    return axios.post('https://ejemplos-dc1c1.firebaseio.com/angular-sngular/tareas/angel.json', this)
  }
}

module.exports = Tarea