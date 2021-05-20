import express from 'express'
import db from '../db.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const result = await db.collection('shooting_ranges').add(req.body)
    console.log(result)
    res.status(200).send("OK")
})

export default router
