import express from 'express'
import coursesSchema from '../Models/courses.js'

const router = express.Router()

// DELETE
router.delete('/', async (req, res) => {
    
})

// POST
router.post('/', async (req, res) => {
    const newCourse = new coursesSchema ({
        dates: req.body.courseToAdd.dates,
        name: req.body.courseToAdd.name,
        gmush: req.body.courseToAdd.gmush,
        description: req.body.courseToAdd.description
    });
    try {
        const addedCourse = await newCourse.save()
        res.json(addedCourse)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const courseToUpdate = await coursesSchema.findById(req.params.id)
        // if(!courseToUpdate) {
        //     return res.status(404).json({message: "Can't find trick :("})
        // }

        await courseToUpdate.dates.push(req.body.dateToAdd)
        await courseToUpdate.save()
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// GET all 
router.get('/', async (req, res) => {
    try {
        const courses = await coursesSchema.find()
        res.json(courses) 

    } catch (err){
        res.status(400).json({message: err.message})
    }
})

// module.exports = router
export default router