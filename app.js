require("dotenv").config()
const express = require('express')

const redirRoutes = require("./routes/redir-routes.js")

const app = express()
const PORT = process.env.PORT || 8080

redirRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))