import Express from 'express'
import indexRouter from './routes/index.js'
import bodyParser from 'body-parser'

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
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// Router

app.use('/', indexRouter)
app.use(Express.json())

app.listen(port, () => console.log("Listening on port " + port))

