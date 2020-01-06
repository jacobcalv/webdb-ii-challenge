const express = require("express")
const helmet = require("helmet")
const carsRouter = require("./cars/carsRouter")
require('dotenv').config();

const server = express()
const host = process.env.HOST 
const port = process.env.PORT 

server.use(helmet())
server.use(express.json())

server.use("/api/cars", carsRouter)
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something is wrong check console",
	})
})

server.listen(port, host, () => {
	console.log(`\nRunning on http://${host}:${port}\n`)
})
