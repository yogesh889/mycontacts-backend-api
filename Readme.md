    Initialize Project ==> git init
--> Express Project Setup
    install Express
    install nodemon
    create .env file -->  convenient way to store environment-specific variables, such as API keys and database passwords, in a simple text file.

--> Create Express Server --> Link(https://expressjs.com/en/starter/hello-world.html)
--> Thunder Client Server --> use thunder client to check api endpoint
--> Express Router Setup --> Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Link(https://expressjs.com/en/starter/basic-routing.html)
    routes -> this folder will create all routes.
--> controller -> control all login for request response, it will connect to database.
--> Error handling Async Handler
--> use express-async-handler
--> Express Middleware --> app.use is a middleware 
--> MongoDB Setup
--> Mongoose Schema
--> CRUD api in project
--> User Authentication
--> Registration and login API
--> Controllers and DB operations
--> Password Hasing and comparing
--> Sign/Verify JWT Token
--> Handle relationships
--> Protected Routes
--> User Authorization
--> API Testing


whenever you need to extract some data from the client to our server we need to use a body parser so that we can parse the stream of the data that we are receiving from the client --> for that we have to use middleware --> express provide us the middleware for the json object which we can get it from the client ==> express inbuild middleware  app.use(express.json()); --> this provide us parser which will help us to parse the data stream which we are getting from client the server side.

whenever we interact with the mongodb we always get a promise in order to resolve that promise we will use async await controller.js file

in async we have to use try cath method to catch error --> instead of this we will use express async handler

config folder --> in order to connect with our mongodb db we will need a mongoose which is a object model design schema for our entities like contacts or user and it helps us to communicate with the mongodb database

model folder --> create schema for our contacts