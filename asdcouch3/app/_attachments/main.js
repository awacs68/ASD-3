$('#loaddatapage').on("pageshow", function(){
         $.couch.db("asd-3").view("asd-3app/owners",{
           success: function(data){
             $('#dataloading').empty();
            $.each(data.rows, function(index, owner){
           console.log(owner);
                var fname = owner.value.fname;
                var docId = owner.value.key;
                var docRev = owner.value.rev;
                
            $('#dataloading').append(
                    $('<li>').append(
                        $('<a>').attr("href", "owner.html?owner=" + docId + "&docRev=" + docRev)
                            .text(fname)
                           
                      )
                  );
             });
             $('#dataloading').listview('refresh'); 
        }
        

    });
  });
 
