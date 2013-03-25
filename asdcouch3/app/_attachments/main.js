$('#loaddatapage').live("pageshow", function(){
    $.couch.db("asd-3").view("asd-3app/owners",{
        success: function(data) {
            console.log(data);
        }
    });
});