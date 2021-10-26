const express = require('express')
const cors = require('cors')
require('dotenv').config()
const rateLimit = require('express-rate-limit')

const PORT = process.env.PORT || 5000

const app = express()

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
})
app.use(limiter)
app.set('trust proxy', 1)

app.use(express.static('public'))

// Routes
app.use('/api', require('./routes/index'))

app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
