function (doc){
    if (doc._id.substr(0,6) != "_design"){
        emit(doc._id.substr(6),{
            "key": doc._id,
            "rev": doc._rev,
            "fname": doc.fname,
            "lname": doc.lname,
            "year": doc.year,
            "make": doc.make,
            "model": doc.model,
            "repairs": doc.repairs
        });
    }
};