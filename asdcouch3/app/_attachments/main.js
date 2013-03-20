$('#loaddatapage').on('pageinit', function(){ 

$.ajax({
        "url": "_view/owners",
        "dataType": "json",
        "success": function(data){
            $.each(data.rows, function(index, owner){
                var fname = owner.value.fname;
                var lname = owner.value.lname;
                 $('#dataloading').append(
                    $('<li>').append(
                        $('<a>').attr("href", "#")
                            .text(fname)
                             
                      )
                  );
             });
             $('#dataloading').listview('refresh'); 
        }
    });
    }); 