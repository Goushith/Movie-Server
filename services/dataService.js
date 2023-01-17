const jwt=require('jsonwebtoken')


const db= require('./db')
//get all the products from db 

userDetails={
    "gcm0006@gmail.com":{email:"gcm0006@gmail.com",username:"Goushith",password:1000},
    "rafnas@gmail.com":{email:"rafnas@gmail.com",username:"Rafnas",password:1001},
    "anujith@gmail.com":{email:"anujith@gmail.com",username:"Anujith",password:1002},
  
  }



  const register=(email,username,password)=>{
    return db.User.findOne({email})
    .then(user=>{
        if(user){
            return{
                status:false,
                statusCode:400,
                 message:'user already registered'
            }
        }
        else{
            const newUser = new db.User({
                email:email,
                username:username,
                password:password,
            })


            newUser.save();
            return{
              status:'True',
                statusCode:200,
                message:'Register Succesfull'
            }
        }
    })
  }







  const  login=(email,password)=>{
    return db.User.findOne({email,password})
    .then(user=>{
      if(user){
        currentUser=user.username
        currentEmail=email
        const token = jwt.sign({
          currentEmail:email},
        'superkey2002')
        return{
          status:'True',
          statusCode:200,
          message:'Login Succesfull',
          token:token,
          currentUser:currentUser,
          currentEmail:currentEmail
        }
      }
      else{
        return {
          status:'false',
          statusCode:400,
          message:'invaild user details'
        }
      }
    })
    }
    


    // const addtowatchlist=(id,name,cover,rating,actors,directors,description)=>{

    //     return db.Watchlist.findOne({id})
    //         .then(result=>{
    //             if(result){
    //                 return{
    //                     status:false,
    //                     statusCode:200,
    //                     message:"movie already exist"
                        
    //                 }
    //             }
    //             else{
    //                 const newMovie =new db.Watchlist({id,name,cover,rating,actors,directors,description})
    //                 newMovie.save()
    //                 return{
    //                     status:true,
    //                     statusCode:200,
    //                     message:'Product added to watchlist'
    //                 }
    //             }
    //         }
    //         )
    //     }


// const addtowatchlist=(email,id,name,cover,rating,actors,directors,description)=>{

//     return db.Watchlist.findOne({email})


// }


// const getwatchlist=()=>{
//     return db.Watchlist.find().then(
//         (result)=>{
//             if(result){
//                 return{
//                     status:true,
//                     statusCode:200,
//                     movies:result
//                 }
//             }else{
//                 return{
//                     status:true,
//                     statusCode:400,
//                     message:'your Wishlist is empty'
//                 }
//             }
//             }
//     )
//     }



const addtowatchlist=(email,id,name,cover,rating,actors,directors,description)=>{
    return db.Watchlist.findOne({email,id})
    .then(watchlist=>{
        if(watchlist){
            return{
                  status:false,
                   statusCode:404,
                   message:"Movie already exist in your Watch list"                   
                }
        }else{
            const newMovie =new db.Watchlist({email,id,name,cover,rating,actors,directors,description})
                    newMovie.save()

                    return{
                        status:true,
                        statusCode:200,
                        message:'The Movie added to Watchlist'
                    }
        }

    })
}



const getwatchlist=(email)=>{
    return db.Watchlist.find({email})
    .then(watchlist=>{
        if(watchlist){
            return{
                status:true,
                statusCode:200,
                watchlist,
            }

        }
        else{
            return{
                status: false,
                statusCode: 401,
                message: 'No movies in here'
            }
        }
    })
}





const getMovies =()=>{
   return db.Movie.find()
   .then(
   (result)=>{
    if(result){
        return{
            status:true,
            statuscode:200,
            movies:result
        }
    }
    else{
        return{
            status:false,
            statuscode:404,
            message:'No movies Found'
        }
    }
   }
    )
}



// -----------------------------------------------


 const deletewatchlist=(email)=>{
    return db.Watchlist.deleteOne({email})
    .then(result=>{
        if(result){
            return{
                status:true,
                statuscode:200,
                message:'Product deleted'
            }
        }
        else{
            return{
                status:false,
                statuscode:404,
                message:'No movies found'
            }
        }
       }
        )
    }






const getmoviedetail=(id)=>{
    return db.Movie.findOne({id})
    .then(result => {
        if (result) {

            return {
                statusCode: 200,
                status: true,
                movies:result
            }
        }
        else {
            return {
                
                status: false,
                statusCode: 404,
                message: 'No items available'
            }
        }
    })
}


const getmoviereview=(id)=>{
    return db.Movie.findOne({id})
    .then(result => {
        if (result) {

            return {
                
                status: true,
                statusCode: 200,
                movies:result
            }
        }
        else {
            return {
                
                status: false,
                statusCode: 404,
                message: 'No items available'
            }
        }
    })
}







module.exports={
    getMovies,
    getmoviedetail,
    getmoviereview,

    register,
    login,
    addtowatchlist,
    getwatchlist ,
    deletewatchlist
}