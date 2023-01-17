const express = require('express') // express imported

const cors= require('cors')

const dataService=require('./services/dataService')
const { Movie } = require('./services/db')

const app = express() //app created using express

app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000'); //port number
})

app.use(cors({
    origin:'http://localhost:4200'
}))


// const appMiddleWare = (req,res,next)=>{
//     console.log('Application Specific Middleware ');
//     next();
// }

// app.use(appMiddleWare)


// // Router specific Middleware
// const jwtMiddleWare=(req,res,next)=>{
//     try{
//         console.log("Router specific Middleware");
//         const token=req.headers['x-access-token'];
//         const data =jwt.verify(token,'superkey2002');
//         console.log(data);
//         next()


//     }
//     catch{
//         res.status(422).json({
//             statusCode:"422",
//             status:"false",
//             message:"please login first"


//         })
        

//     }
   
// }
app.get('/all-movies',(req,res)=>{
dataService.getMovies()
.then(result=>{
    res.status(result.statuscode).json(result)
})
})



app.post('/addtowatchlist',(req,res)=>{
    dataService.addtowatchlist(req.body.email,req.body.id,req.body.name,req.body.cover,req.body.rating,req.body.actors,req.body.directors,req.body.description)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// delete watchlist Movie

app.delete('/deletewatchlist/:email',(req,res)=>{
    dataService.deletewatchlist(req.params.email)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})








app.post('/getwatchlist',(req,res)=>{
    dataService.getwatchlist(req.body.email)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})











app.post('/movie-details', (req, res) => {
    dataService.getmoviedetail(req.body.id)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

// Register and login

app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.email,req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })//access
   

})

app.post('/login',  (req,res)=>{
    console.log(req.body);
    dataService.login(req.body.email,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})























































// app.post('/review-details', (req, res) => {
//     dataService.getmoviereview(req.body.id)
//         .then(result => {
//             res.status(result.statusCode).json(result)
//         })
// })