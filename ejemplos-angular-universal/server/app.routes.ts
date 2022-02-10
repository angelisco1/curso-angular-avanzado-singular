import * as express from 'express'
import * as jwt from 'jsonwebtoken'

const router = express.Router()

const usuariosRegistrados = [
  { username: 'cfalco', password: '1234', email: 'cfalco@gmail.com', nombre: 'Charles' },
  { username: 'oblake', password: '1234', email: 'oblake@yahoo.es', nombre: 'Octavia' },
]

router.post('/login', (req, res) => {
  const { username, password } = req.body

  const usuarioRegistrado = usuariosRegistrados.find((u: any) => {
    return u.username === username && u.password === password
  })

  if (!usuarioRegistrado) {
    return res.status(401).json({err: 'Credenciales incorrectas'})
  }

  const token = jwt.sign({nombre: usuarioRegistrado.nombre}, process.env['PALABRA_SECRETA'] as string)
  return res.json({token})

})

router.use('/api', (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({err: 'Te falta la cabecera de Authorization'})
  }

  const [bearer, token] = authHeader.split(' ')

  if (bearer !== 'Bearer') {
    return res.status(403).json({err: 'La cabecera de Authorization está mal'})
  }

  try {
    const payload = jwt.verify(token, process.env['PALABRA_SECRETA'] as string)
    return next()
  } catch (err) {
    return res.status(403).json({err: 'El token es invalido'})
  }

})


router.get('/api/datos', (req, res) => {
  return res.json({datos: [1, 2, 3, 4, 5, 6]})
})

export default router
