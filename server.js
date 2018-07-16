const path = require('path')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const port = process.env.PORT || 8261

app.use(logger('common'))
app.use(express.static('public'))
app.use(cors())
// app.set('trust proxy', true)

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.get('/products/:id', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    )
  }
})
