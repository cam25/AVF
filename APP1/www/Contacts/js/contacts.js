document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
	onSuccess();
};
function onSuccess() {
    
    $("#create").on("click" , function() {
                    var contact = navigator.contacts.create();//set variable to create contact method call
                    var name = null;//name starts off null
                    
                    contact.displayName = $("#txtFirst").attr("value") + " " + $("#txtLast").attr("value");//populates the first/last name with data inside input field.
                    
                    contact.nickname = $("#txtFirst").attr("value") +  " " + $("#txtLast").attr("value");
                    
                    name = new ContactName();
                    name.givenName = $("#txtFirst").attr("value");//specfifies given name due to the value of whats entered in input field
                    name.familyName = $("#txtLast").attr("value");
                    contact.name = name;
                    
                    contact.emails = [
                                      new ContactField("home", $("#txtEmail").attr("value"), true)//sets email category to home field  
                                      
                                      ];
                    contact.phoneNumbers = [
                                            new ContactField("mobile", $("#txtNumber").attr("value"), true )
                                            ];
                    //saves the contact with input fields
                    contact.save( function () {
                                 $("#txtFirst").attr("value", "");//empty string allows for text to be caught from create call
                                 $("#txtLast").attr("value", "");
                                 $("#txtEmail").attr("value", "");
                                 $("#txtNumber").attr("value", "");
                                 
                                 },
                                 function(){
                                 alert("error");
                                 
                                 });
                    
                    });
    
    $("#find").on("click" , function() {
                  
                  var fields = ["*"];// * allows search for all contacts
                  var options = {
                  filter: $("#txtLast").attr("value"),//filters search inside the txtLast input field
                  multiple: true
                  
                  };
                  
                  navigator.contacts.find( fields, function(contacts){//finds contacts within fields
                                          
                                          $("#txtFirst").attr("value", contacts[0].name.givenName);//txtFirst input field populated with contact properties
                                          $("#txtLast").attr("value", contacts[0].name.familyName);
                                          $("#txtEmail").attr("value", contacts[0].emails.value);
                                          $("#txtNumber").attr("value", contacts[0].name.phoneNumbers[0].value);
                                          
                                          
                                          
                                          }, function (error) {
                                          alert("error")
                                          },
                                          options );//options being passed inside find call
                  
                  });
};


