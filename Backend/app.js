const dotenv= require('dotenv');
dotenv.config(); // This will read the .env file and make those values available as environment variables
const cors=require('cors'); // This is a middleware that allows us to make requests to our API from a different domain

const connectToDb = require('./db/db.js');
connectToDb(); // This will connect to the database


const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.route')


const cookieParser= require('cookie-parser')
const  express = require('express')

const app = express()

app.use(cors());
app.use(cookieParser())
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports=app;