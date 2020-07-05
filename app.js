const express = require('express');
const bodyParser = require('body-parser');
const mogoose =require('./Database/mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
// const middleware = require('./Middleware/middleware');
// const auth = require('./Middleware/auth');
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); 


//const userRouter = require('./Routers/users')
// // app.use(userRouter)


// // const showRouter = require('./Routers/shows')
// // app.use(showRouter)


// // const ticketReserved = require('./Routers/ticketreserved')
// // app.use(ticketReserved)



app.listen(5100, function(){
});