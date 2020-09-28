import Express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Routes
import coursesRouter from './routes/courses.js'
import profileRouter from './routes/profile.js'

dotenv.config()

const app = Express()

const port = process.env.PORT || 5000

// Define body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

// DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, 
                                             useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Enable cors 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE, PATCH");
    next();
});

// Router
app.use('/profile', profileRouter)
app.use('/courses', coursesRouter)
app.use(Express.json())

app.listen(port, () => console.log("Listening on port " + port))

