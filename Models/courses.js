import mongoose from 'mongoose'

const courses = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dates: [{
        type: String
    }],
    gmush: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

export default mongoose.model('coursesSchema', courses)