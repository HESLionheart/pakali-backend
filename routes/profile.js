import express from 'express'
import db from '../db.js'

const router = express.Router()

// DELETE
router.delete('/', async (req, res) => {
    
})

// POST
router.post('/', async (req, res) => {
    
})

// UPDATE (adding course(s) to profile)
router.patch('/:personalNum', async(req, res) => {
    // try {
    //     const updatedProfile = await profileSchema.findOneAndUpdate({ personalNum: req.params.personalNum}, {
    //         $push: {courses: req.body.coursesToAdd}
    //     })
    //     res.json(updatedProfile)
    // } catch(err) {
    //     res.status(500).json({message: err})
    // }
})

// GET 
router.get('/:personalNum', async (req, res) => {
    // try {
    //     const profiles = await profileSchema.find({ personalNum : req.params.personalNum })
    //     if(profiles.length === 0) {
    //         return res.status(404).json({message: "Couldn't find profile"})
    //     } else {
    //         res.json(profiles[0]) 
    //     }
    // } catch (err){
    //     res.status(500).json({message: err})
    // }
})

router.get('/:id/:pass', async (req, res) => {
    const snapshot = await db.collection('Users').get()
    console.table(snapshot)
    snapshot.forEach((doc) => {
        const data = doc.data()
        data.tz === req.params.id && data.password === req.params.pass? 
        res.status(200).json(data) :
        res.status(401).send("you are not authorized")
    })   
})

// module.exports = router
export default router