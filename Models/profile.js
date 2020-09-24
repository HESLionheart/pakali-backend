import mongoose from 'mongoose'

const selectedCourse = new mongoose.Schema({
    name: String,
    selectedDate: String
})

const profile = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [
        selectedCourse
    ],
    personalNum: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    }
})

export default mongoose.model('profile', profile)