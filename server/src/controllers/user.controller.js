const ctrl = {}
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user.model'

ctrl.sigInUser = async (req, res) => {
     const { email, password } = req.body

     try {
          const existUser = await User.findOne({ email : email })
          if(!existUser) return res.status(404).json({ message: 'User doesnt exist' })

          const isPassword = await bcrypt.compare(password, existUser.password)
          if(!isPassword) return res.status(403).json({ message: 'Wrong password' })

          const token = await jwt.sign(
                    { 
                    email: existUser.email, id: existUser._id
                    }, 
                    //  process.env.COOKIE_SECURE,
                    'test',
                     { 
                          expiresIn: '1h'
                     }
                                                 )
            res.status(200).json({ profile: existUser, token})
               
     } catch (error) {
          res.status(500).json({ message: 'Something went wrong' })
     }
}

ctrl.signUpUser = async (req, res) => {
     const { email, password, name, lastname, confirmpassword } = req.body

     try {
          const existUser = await User.findOne({ email})
          if(existUser) return res.status(404).json({ message: 'User already exist' })

          if(password !== confirmpassword) return res.status(403).json({ message: "Passwords don't match" })

          const encrypt = await bcrypt.genSalt(12)
          const hashPassword = await bcrypt.hash(password, encrypt)

          const newUser= new User({
               name ,
               lastname,
               email,
               password: hashPassword
          })

          const result = await newUser.save()
           const token = await jwt.sign(
                    { 
                    email: result.email, id: result._id
                    }, 
                    //  process.env.COOKIE_SECURE,
                    'test',
                     { 
                          expiresIn: '1h'
                     }
                                                 )
            res.status(200).json({ 'profile': result, token})
          
     } catch (error) {
          // res.status(500).json({ 'error': error, message: 'Something went wrong' })
          console.log(error)
          
     }
}

module.exports = ctrl