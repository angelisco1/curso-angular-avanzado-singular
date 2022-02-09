const axios = require('axios')
const fs = require('fs').promises


axios.get('https://digimon-api.vercel.app/api/digimon')
  .then(resp => {
    const arrRutas = resp.data.map(digimon => `/digimons/${digimon.name}`)
    const strRutas = arrRutas.join('\n')
    return fs.writeFile('digimon-rutas.txt', strRutas)
  })
  .then(() => {
    console.log('Archivo de rutas creado 😀')
  })
  .catch(err => {
    console.log(err)
  })