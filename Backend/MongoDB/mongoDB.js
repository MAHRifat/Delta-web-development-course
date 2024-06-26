// the shell 
    // mongosh   -> to start
    // use college -> to create & use a new database called "college"
    // sudo brew services start mongobd-community@7.0.11   -> for macos
    // net start MongoDB -> to start mongodb in windows
    // net stop MongoDB -> to stop mongodb
    // mongosh  -> to start 
    // show dbs -> to show all the db
    // db -> to show current db

    


// BSON Data -> Binary JSON
    // mongodb store data in bson format


// Collections
    // Document -> mongo stores data in form of documents (BSON docs)
    // collection: mongodb stores documents in collections.
    
    


// insert in db   // https://www.mongodb.com/docs/manual/reference/insert-methods/
    // show collections           -> to show collections
    // db.student.insertOne({name: "adam", mark: 79})     -> create collections and insert document
    // db.student.find()                     -> find all data of a collection
    // db.student.insertMany()     -> to store more than one documents



// Find in db   -> https://www.mongodb.com/docs/manual/tutorial/query-documents/
    // db.collection.find()     -> return every document
    // db.collcention.find({key: value})      -> cursure which means that it return the refenece of the document inside an arrya
    // db.collection.findOne({key: value})   -> return only one value which is matched   -> it return the actual document

    // query operations
        // db.student.find({marks: {$gt: 75}})   -> find the student where marks > 75
        // db.student.find({city: {$in: ["Delhi", "Mumbai"]}})  -> find the sudent who live in Delhi or mumbai
        // db.student.find({$or: [ {marks: {$gt: 75}}, {city: "Delhi"}]})   -> find the student who scored > 75 or live in Delhi

        // operators -> https://www.mongodb.com/docs/manual/reference/operator/


    
// Update documents   -> https://www.mongodb.com/docs/manual/tutorial/update-documents/
    // db.collection.updateOne(<filter>, <update> , <options> )
    // db.student.updateOne( {name: "adam"}, {$set: {marks: 99}})  -> update marks of adam to 99
    // db.collection.updateMany()   -> update all documents that match a specified filter
    // db.collection.replaceOne()   -> replace full document ke replace kore dey onnno data er sathe
        // db.student.replaceOne({name: "bob", {name: "rifat", marks: 56}})


// nesting 
    // {
    //     _id : ObjectId("89yteuhegfkefjhfigu"),
    //     name: 'fate',
    //     performance: {marks: 88, grade: 'A'}
    // }

    // db.sudent.findOne( {"performance.marks": 88 } )


// delete in db
    // db.collection.deleteOne( <filter> , <options>)
    // db.collection.deleteMany( <filter> , <options> )
    // db.collection.deleteMany( {})     -> delete all the document
    // db.dropDatabase()   -> delete the hole current using database

    



