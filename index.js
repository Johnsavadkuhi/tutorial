
const express = require('express'); 
const bodyParser = require('body-parser'); 
const graphqlHttp = require('express-graphql'); 
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const app = express(); 

app.use(bodyParser.json()); 

app.use('/graphql' , graphqlHttp({

    schema : graphqlSchema   , 
    
    rootValue:graphqlResolver ,

    graphiql :true 

}))

console.log("running on port 5001"); 
app.listen(5001);  
