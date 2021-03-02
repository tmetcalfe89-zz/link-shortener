const fs = require('fs')
const path = require('path')

module.exports = (app) => {
  app.get("/*", (req, res, next) => {
    let routes = require('../db/redirs.json')
    if (routes[req.originalUrl]) {
      routes[req.originalUrl].count++
      fs.writeFileSync(path.join(__dirname, '../db/redirs.json'), JSON.stringify(routes, null, 2))
      res.redirect(routes[req.originalUrl].url)
    } else {
      res.redirect(routes["/"].url)
    }
  })
}