const mongoose=require ('mongoose')


mongoose.connect('mongodb://localhost:27017/MovieApp',()=>{
    console.log('connected to MongoDB')
})


//creating model

const Movie = mongoose.model('Movie',{
    id:Number,
    name:String,
    cover:String,
    rating:String,
    actors:String,
    directors:String,
    description:String,
    reviews:[
        {
            author:String,
            published_on:String,
            review:String,
            rating:Number
        },
        {
            author:String,
            published_on:String,
            review:String,
            rating:Number
        }
    ]
}) 



const User = mongoose.model('User',
{
    email:String,
    username:String,
    password:String,
})



const Watchlist = mongoose.model('Watchlist',
{
    // email:String,
    // watchlists:[
    //     {
        email:String,
        id:Number,
        name:String,
        cover:String,
        rating:String,
        actors:String,
        directors:String,
        description:String,
    //     }
    // ]
}
)




module.exports={
    Movie,
    User,
    Watchlist

}