require('dotenv').config()
const express = require('express')
const cors = require('cors')
const webpush = require('web-push')
const AppRoutes = require('./routes/app.routes')


const app = express()

webpush.setVapidDetails('mailto:ejemplo@ejemplo.com', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY)

app.use(cors())
app.use(express.json())


app.use(AppRoutes)


app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
