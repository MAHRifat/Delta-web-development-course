// Middleware -> it is an intermediary

// request ->>>>>>Middleware ->>>>>>>> Response

// in express
    // MIddleware in Express are functions that come into play after the server receives 
    // the request and before the response in sent to the client.

    // common middleware funciton:
        // methodOverride
        // bodyParser
        // express.static
        // express.urlencoded

    // middleware access the req and res obj
    // chainning is possiable      m ---> m ----> m
    // middleware can send a response to stop the chainning


// what do middlewares do?
// Middleware funcitons can perform the following tasks:
    // Execute any code
    // Make changes to the request and the response objects.
    // End the request-response cycle.
    // call the next middleware function in the stack