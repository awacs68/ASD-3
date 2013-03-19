function (doc){
    if (doc._id.substr(0,6) === "owner:"){
        emit(doc._id.substr(6),{
            "fname": doc.fname,
            "lname": doc.lname
        });
    }
};