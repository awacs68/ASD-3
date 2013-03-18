// Author: Mark McAninch //
// ASD //
// Term: 1303 //

// Save Function //

$("img").animate({width: "50%"},1500);

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

// Display Function //

$('#loaddatapage').on('pageinit', function(){ 
  $('#display').on('click', function(){ 
var getItem = function(){
  for(var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    var item = JSON.parse(value);
  
  $(''+
    '<li>'+ item.fname[1] +'</li>'+
    '<li>'+ item.lname[1] +'</li>'+
    '<li>'+ item.year[1] +'</li>'+
    '<li>'+ item.make[1] +'</li>'+
    '<li>'+ item.model[1] +'</li>'+
    '<li>'+ item.repairs[1] +'</li>'
    ).appendTo('#dataloading');
  }
 };
getItem();
});

// Edit Function //
//$('#edit').on('click', function(){});
var editItem = function(){
   var currentKey = $(this).attr("key");
   var value = localStorage.getItem($(this).attr("key"));
   var item = JSON.parse(value);
      $('#fname').val(item.fname[1]);
      $('#lname').val(item.lname[1]);
      $('#year').val(item.year[1]);
      $('#make').val(item.make[1]);
      $('#model').val(item.model[1]);
      $('#repairs').val(item.repairs[1]);
   localStorage.removeItem(currentKey);
   
    
  
editItem();
};



// Static Remote Data //
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
                '<ol>'+ myJson.owner +'</ol>'+
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
              myXml.fName = $(this).find('fName').text();
              myXml.fname = $(this).find('fname').text();
              myXml.lName = $(this).find('lName').text();
              myXml.lname = $(this).find('lname').text();
              myXml.vyear = $(this).find('vyear').text();
              myXml.year = $(this).find('year').text();
              myXml.vmake = $(this).find('vmake').text();
              myXml.make = $(this).find('make').text();
              myXml.vModel = $(this).find('vModel').text();
              myXml.model = $(this).find('model').text();
              myXml.Repair = $(this).find('Repair').text();
              myXml.repairs = $(this).find('repairs').text();
              $(''+
                '<li>'+ myXml.fName +'</li>'+
                '<ol>'+ myXml.fname +'</ol>'+
                '<li>'+ myXml.lName +'</li>'+
                '<ol>'+ myXml.lname +'</ol>'+
                '<li>'+ myXml.vyear +'</li>'+
                '<ol>'+ myXml.year +'</ol>'+
                '<li>'+ myXml.vmake +'</li>'+
                '<ol>'+ myXml.make +'</ol>'+
                '<li>'+ myXml.vModel +'</li>'+
                '<ol>'+ myXml.model +'</ol>'+
                '<li>'+ myXml.Repair +'</li>'+
                '<ol>'+ myXml.repairs +'</ol>'
                ).appendTo('#dataloading');
            });
    }   
     });   
}); 
   });
