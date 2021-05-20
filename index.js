import Express from 'express'
import bodyParser from 'body-parser'

// Routes
// import coursesRouter from './routes/courses.js'
import profileRouter from './routes/profile.js'
import rangeRouter from './routes/ranges.js'

const app = Express()

const port = process.env.PORT || 5000

// Define body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

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
app.use('/ranges', rangeRouter)
// app.use('/courses', coursesRouter)
app.use(Express.json())

app.listen(port, () => console.log("Listening on port " + port))

