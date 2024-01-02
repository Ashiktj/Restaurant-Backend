//import json-server
const jsonServer = require('json-server')

//create a server application using json server
const restserver = jsonServer.create()

//setup path for db.json
const router = jsonServer.router('db.json')

//return a middleware used by json server
const middleware = jsonServer.defaults()

//setup port
const port = 3001

//use in server
restserver.use(middleware)
restserver.use(router)

//to run port
restserver.listen(port,()=>{
    console.log('rest Server listening on port' +port);
})