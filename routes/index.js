import express from 'express'
const router = express.Router()

// UPDATE
router.post('/crmTrickes/:id', async (req, res) => {
})


// DELETE
router.delete('/', async (req, res) => {
    
})

// POST
router.post('/', async (req, res) => {

})

// GET
router.get('/', async (req, res) => {
    res.json("Ma koreeeee???")
})

// GET
router.get('/course/:id', async (req, res) => {
    res.send("This is course router " + req.params.id)
})


// module.exports = router
export default router