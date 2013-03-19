function (doc){
    if (doc._id.substr(0,8) === "vehicle:"){
       emit(doc._id.substr(8),{
            "year": doc.year,
            "make": doc.make,
            "model": doc.model,
            "repairs": doc.repairs
        });
    }
};