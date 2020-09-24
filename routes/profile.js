import express from 'express'
import profileSchema from '../Models/profile.js'

const router = express.Router()

// async function findByPersonalNum(req, res, next) {
//     try { 
//         const profiles = await profileSchema.find({ personalNum : req.params.personalNum })
//         if(profiles.length === 0) {
//             return res.status(404).json({message: "Couldn't find profile"})
//         } else {
//             res.profileFound = profiles[0]
//         }
//     } catch(err) {
//         return res.status(500).json({message: err.message})
//     }

//     next()
// }


// DELETE
router.delete('/', async (req, res) => {
    
})

// POST
router.post('/', async (req, res) => {
    
})

// UPDATE (adding course(s) to profile)
router.patch('/:personalNum', async(req, res) => {
    try {
        const updatedProfile = await profileSchema.findOneAndUpdate({ personalNum: req.params.personalNum}, {
            $push: {courses: req.body.coursesToAdd}
        })
        res.json(updatedProfile)
    } catch(err) {
        res.status(500).json({message: err})
    }
})

// GET 
router.get('/:personalNum', async (req, res) => {
    try {
        const profiles = await profileSchema.find({ personalNum : req.params.personalNum })
        if(profiles.length === 0) {
            return res.status(404).json({message: "Couldn't find profile"})
        } else {
            res.json(profiles[0]) 
        }
    } catch (err){
        res.status(500).json({message: err})
    }
})


router.get('/', async (req, res) => {
    try {
        const profiles = await profileSchema.find()
        res.json(profiles) 

    } catch (err){
        res.status(400).json({message: err.message})
    }

    // try {
    //     const arr = [{"name":"Nikole Waintraub","status":"on the face","birthday":"19.06.1999","personalNum":"8456304"},{"name":"Shiraz Yaakov","status":"Every place has a documentum","birthday":"27.10.1997","personalNum":"8280167"},{"name":"Roy Vardi","status":"I call my mom 'Mom'","birthday":"21.02.2000","personalNum":"8677696"},{"name":"Danielle Gimpel","status":"Its ahme.. arabic arabic arabic","birthday":"28.04.2000","personalNum":"8670224"}]
    //     arr.forEach(async(p) => {
    //         const pp = new profileSchema({
    //             name: p.name,
    //             courses: [],
    //             personalNum: p.personalNum,
    //             birthday: p.birthday,
    //             status: p.status
    //         })
    //         await pp.save()
    //     })
    // } catch(err) {
    //     res.status(500).json({message: err})
    // }

    // res.json("Coolllll")
})

// module.exports = router
export default router