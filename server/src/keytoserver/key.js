require('dotenv').config()

module.exports = {
     mongodb : {
           URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lquq3.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
     },
       serverPORT: {
          PORT: process.env.PORT
     },
     cloudinaryDB: {
           CLOUD_NAME: process.env.CLOUD_USER,
          API_KEY: process.env.CLOUD_KEY,
          API_SECRET: process.env.CLOUD_SECRET
     }
    
}