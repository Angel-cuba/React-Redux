import mongoose from 'mongoose';
import { mongodb } from '../keytoserver/key'

mongoose.connect(mongodb.URI, { 
     useNewUrlParser: true,
     useUnifiedTopology: true,
})
          .then(db => console.log('Conected to MongoDB' ))
          .catch(err => console.error)