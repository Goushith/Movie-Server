const db= require('./db')
//get all the products from db 

userDetails={
    "gcm0006@gmail.com":{email:"gcm0006@gmail.com",username:"Goushith",password:1000},
    "rafnas@gmail.com":{email:"rafnas@gmail.com",username:"Rafnas",password:1001},
    "anujith@gmail.com":{email:"anujith@gmail.com",username:"Anujith",password:1002},
  
  }



  register=(email,username,password)=>{
    // let userDetails=this.userDetails;

    if(email in userDetails){
      return false
    }else{
      userDetails[email]={
        email,
        username,
        password,

      }
    //   this.saveShopping()
      console.log(userDetails);
      return true
      
    }
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







module.exports={
    getMovies,
    getmoviedetail,
    getmoviereview
}