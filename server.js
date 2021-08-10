const express = require('express')
const connectDB = require('./config/db')

const app = express()

connectDB()

// define routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 7777

app.listen(PORT, () => console.log(`🚀 Server Live 🌎 @ port ${PORT}`))

