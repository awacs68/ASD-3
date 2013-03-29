$('#loaddatapage').on("pageshow", function(){
         $.couch.db("asd-3").view("asd-3app/owners",{
           success: function(data){
             $('#dataloading').empty();
            $.each(data.rows, function(index, owner){
         //  console.log(owner);
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
 $('#owner').on("pageshow", function(){ 
   var urlVars = function(){
     var urlData = $($.mobile.activePage).data("url");
     var urlParts = urlData.split('?');
     var urlPairs = urlParts[1].split('&');
     var urlValues = {};
     for (var pair in urlPairs) {
         var keyValue = urlPairs[pair].split('=');
         var key = decodeURIComponent(keyValue[0]);
         var value = decodeURIComponent(keyValue[1]);
         urlValues[key] = value;
     }
     return urlValues;
};
     var decodedKey = urlVars()[".owner"];
     var decodedRev = urlVars()[".docRev"];
     $.couch.db("asd-3").openDoc(decodedKey, {
             success: function(data){
                      $(' ' +
                                  '<li><p>First Name: ' + data.fname + '</p></li>' +
                                  '<li><p>Last Name: ' + data.lname + '</p></li>' +
                                  '<li><p>Year: ' + data.year + '</p></li>' +
                                  '<li><p>Make: ' + data.make + '</p></li>' +
                                  '<li><p>Model: ' + data.model + '</p></li>' +
                                  '<li><p>Repairs: ' + data.repairs + '</p></li>' 
                                  ).appendTo('#owner');
                  },
                       error: function(status){
                              console.log(status);
                        }
                  });
               });
$("img").animate({width: "50%"},1500);

$('#owner').on('pageinit', function(){
   
    var myForm = $('#owner');
        myForm.validate({
      invalidHandler: function(myForm, validator) {},
      submitHandler: function() {
    var data = myForm.serializeArray();
    storeData(data);
    }
  });
    var storeData = function(key){
    var id = Math.floor(Math.random()*1000001);  
  
        
    var item = {};
        item.fname = ["First Name:", $("#firstname").val()];
        item.lname = ["Last Name:", $("#lastname").val()];
        item.year = ["Year:", $("#year").val()];
        item.make = ["Make:", $("#make").val()];
        item.model = ["Model:", $("#model").val()];
        item.repairs = ["Repairs:", $("#repairs").val()];
      localStorage.setItem(id, JSON.stringify(item));
  alert("Information Saved!");
 };
 });   
