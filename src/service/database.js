import mongoose from 'mongoose'

// mongoose.connect('mongodb://localhost/test_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(db => console.log('Db is connected'))
//   .catch(err => console.log(err));

  mongoose.connect('mongodb+srv://javi:javi@cluster0.ee0d2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err));