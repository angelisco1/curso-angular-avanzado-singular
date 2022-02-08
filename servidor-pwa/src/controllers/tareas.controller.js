const webpush = require('web-push')
const Tarea = require('../models/tarea')


exports.createTarea = (req, res) => {
  const { titulo, completada } = req.body
  const tarea = new Tarea(titulo, completada)

  tarea.save()
    .then(resp => {
      const id = resp.data.name
      tarea.id = id

      const payload = {
        notification: {
          title: 'Nueva tarea',
          body: `Se ha añadido una nueva tarea: ${tarea.titulo}`
        }
      }

      // const suscripcion = {}
      // webpush.sendNotification(suscripcion, payload)
      //   .then(() => {
      //     console.log('Notificación enviada')
      //   })
      //   .catch(err => {
      //     console.log('Error al enviar la notificación', err)
      //   })

      return res.status(201).json({name: tarea.id})
    })

}