const express = require('express') // express imported

const cors= require('cors')

const dataService=require('./services/dataService')

const app = express() //app created using express

app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000'); //port number
})

app.use(cors({
    origin:'http://localhost:4200'
}))





app.get('/all-movies',(req,res)=>{
dataService.getMovies()
.then(result=>{
    res.status(result.statuscode).json(result)
})
})



app.post('/movie-details', (req, res) => {
    dataService.getmoviedetail(req.body.id)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

// Register and login

app.post('/movies'),(req,res)=>{
    console.log(req.body);
    res.send('register Successfull')
}
























































// app.post('/review-details', (req, res) => {
//     dataService.getmoviereview(req.body.id)
//         .then(result => {
//             res.status(result.statusCode).json(result)
//         })
// })