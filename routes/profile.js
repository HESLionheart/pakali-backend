import express from 'express'
import admin from 'firebase-admin'
import db from '../db.js'

const router = express.Router()

// DELETE
router.delete('/', async (req, res) => {

})

// POST
router.post('/', async (req, res) => {

})

// UPDATE (adding course(s) to profile)
router.patch('/:personalNum', async (req, res) => {
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
    console.log(req.params.id)
    console.log(req.params.pass)
    const user = (await db.collection('users').doc(req.params.id).get()).data()
    console.log(user.password)
    user.password === req.params.pass ?
        res.status(200).json(user) :
        res.status(401).send("you are not authorized")
})

router.post('/:id/ranges', async (req, res) => {
    const userRef = db.collection('users').doc(req.params.id)
    const result = await userRef.update({
        ranges: admin.firestore.FieldValue.arrayUnion(req.body)
    })
    console.log(result)
    res.status(200).send("OK")
})

// module.exports = router
export default router