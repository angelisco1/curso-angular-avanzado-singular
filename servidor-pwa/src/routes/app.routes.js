const express = require('express')
const TareasController = require('../controllers/tareas.controller')

const router = express.Router()

router.post('/tareas', TareasController.createTarea)

module.exports = router