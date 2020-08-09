
// server
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

// nunjucks configuration (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,

})

// server init and config
server
// receive data from req.body
.use(express.urlencoded({ extended: true }))
//static file configs (CSS, scripts, images)
.use(express.static("public"))
// application routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// server start
.listen(5500)



