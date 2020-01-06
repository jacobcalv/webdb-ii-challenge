const express = require("express")
const db = require("../utils/db")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db("carSpecs").select()
        res.json(cars)
    } catch (err) {
        next(err)
      }
})

router.post("/", async (req, res, next) => {
    try {
        const carId = await db("carspecs").insert(req.body)
        const newCar = await db("carspecs").where({ id: carId[0] }).first()
    
        res.status(201).json(newCar)
    }
    catch(err){
        next(err)
    }
})

module.exports = router