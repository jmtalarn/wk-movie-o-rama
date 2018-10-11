db.getCollection('profiles').updateMany(
    // query 
    {
    },
    
    // update 
    {
        $set: {token: ''}
    },
    
    // options 
    {
        "multi" : false,  // update only one document 
        "upsert" : false  // insert a new document, if no existing document match the query 
    }
);