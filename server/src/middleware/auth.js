import jwt, { decode } from 'jsonwebtoken';

const auth = async (req, res, next) => {

     // console.log(req)
     try {
          const token = req.headers.authorization.split(' ')[1];
          const isCustomAuthorization = token.length < 500

          // console.log('------',token);
          // console.log('------------', isCustomAuthorization)

          let decodedData
                    // console.log(process.env.COOKIE_SECURE);


               if(token || isCustomAuthorization){

                    decodedData = jwt.verify(token, process.env.COOKIE_SECURE)
                    //process.env.COOKIE_SECURE
                    console.log('---------------------',decodedData)
                    console.log(isCustomAuthorization)

                    req.userId = decodedData.id
               }else{
                    decodedData = jwt.decode(token)

                    req.userId = decodedData.sub
               }

               next();
     } catch (error) {
          console.log(error)
     }
}

export default auth