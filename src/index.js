// import resolvers from './resolvers'
// import { GraphQLServer } from "graphql-yoga"
// import path from "path";
import "./service/database"
import User from './models/User'
import routerUser from './router/user.router'
import routerCategory from './router/categoty.router'
import routerProduct from './router/product.router'
var cors = require('cors');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// console.log(path.join(__dirname, "graphql/./schemas/schema_.graphql"))

// export const server = new GraphQLServer({
//     typeDefs: path.join(__dirname, "./schemas/schema.graphql"),
//     resolvers
//   });

// server.start({port: 3200}, ({port}) => {
// console.log('Server on port', port);
// });

app.use('/user', routerUser);
app.use('/category', routerCategory);
app.use('/product', routerProduct);

app.listen(port, async () => { 
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;



