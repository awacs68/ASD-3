$('#loaddatapage').on("pageshow", function(){
    $.couch.db("asd-3").view("asd-3app/owners",{
        "success": function(data){
            $('#loaddatapageitems').empty();
            $.each(data.rows, function(index, owner){
                var docId = owner.value.key;
                var docRev = owner.value.rev;
                var name = owner.value.name;
            $('#loaddatapageitems').append(
                    $('<li>').append(
                        $('<a>').attr("href", "owner.html?owner=" + docId + "&docRev=" + docRev)
                            .text(name)
                           
                      )
                  );
             });
             $('#dataloadingitems').listview('refresh'); 
        },
        "error" : function(error, parseerror){
console.log('Error!' + error);
console.log('Error!' + parseerror);
}
    });
  });
 
