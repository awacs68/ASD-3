// Author: Mark McAninch //
// ASD //
// Term: 1303 //

// Save Function //

$('#form').on('pageinit', function(){
   
    var myForm = $('#ownerform');
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

// Edit Function //

 $('#edit').on('click', function(){
  $('div').appendTo('label');
  alert("Are you sure you want to edit the form?");
});
 
// Delete Function //


// Static Remote Data //



$('#loaddatapage').on('pageinit', function(){ 

// Json Function //

 $("#JSON").on('click', function(){
$("#dataloading").empty();

  $.ajax({
    url: 'xhr/data.json',
    type: 'GET',
    dataType: 'json',
    success: function(json){
           console.log(json);
             for(var i=0, j= json.contacts.length; i<j; i++){
              var myJson = json.contacts[i];
              $(''+
                '<li>'+ myJson.fname +'</li>'+
                '<li>'+ myJson.lname +'</li>'+
                '<li>'+ myJson.year +'</li>'+
                '<li>'+ myJson.make +'</li>'+
                '<li>'+ myJson.model +'</li>'+
                '<li>'+ myJson.repairs +'</li>'
                ).appendTo('#dataloading');
            };
    }   
     });   
        });

// XML Function //

$("#XML").on('click', function(){
  $("#dataloading").empty();
  $.ajax({
    url: 'xhr/data.xml',
    type: 'GET',
    dataType: 'xml',
    success: function(xml){
           console.log(xml);
            $(xml).find('information').each(function(){
              var myXml = {};
              myXml.fname = $(this).find('fname').text();
              myXml.lname = $(this).find('lname').text();
              myXml.year = $(this).find('year').text();
              myXml.make = $(this).find('make').text();
              myXml.model = $(this).find('model').text();
              myXml.repairs = $(this).find('repairs').text();
              $(''+
                '<li>'+ myXml.fname +'</li>'+
                '<li>'+ myXml.lname +'</li>'+
                '<li>'+ myXml.year +'</li>'+
                '<li>'+ myXml.make +'</li>'+
                '<li>'+ myXml.model +'</li>'+
                '<li>'+ myXml.repairs +'</li>'
                ).appendTo('#dataloading');
            });
    }   
     });   
}); 
   });