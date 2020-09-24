import express from 'express'
import coursesSchema from '../Models/courses.js'

const router = express.Router()

async function dateFormating(req, res, next) {
    let [day, month, year] = req.body.dateToAdd.split('.')
    try { 
        if(day.length === 1) {
            day = `0${day}`
        }
        if(month.length === 1) {
            month = `0${month}`
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }

    res.dateInFormat = `${day}.${month}.${year}`;
    next()
}

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

// UPDATE (adding date to course)
router.patch('/:id', dateFormating, async(req, res) => {
    try {
        const courseToUpdate = await coursesSchema.findById(req.params.id)
        await courseToUpdate.dates.push(res.dateInFormat)
        await courseToUpdate.save()
    } catch(err) {
        res.status(500).json({message: err.message})
    }

    res.json(res.dateInFormat)
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