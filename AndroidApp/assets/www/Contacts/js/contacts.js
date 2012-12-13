// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
 
    // PhoneGap is ready
    //
    function onDeviceReady() {
        // create
        $("#create").on("click" , function() {
        var contact = navigator.contacts.create();
        contact.displayName = $("#txtFirst").attr("value") + " " + $("#txtLast").attr("value");;
        contact.nickname = $("#txtFirst").attr("value") +  " " + $("#txtLast").attr("value");;       //specify both to support all devices
        var name = new ContactName();
        name.givenName = $("#txtFirst").attr("value");
        name.familyName = $("#txtLast").attr("value");
        contact.name = name;
        contact.emails = [
                                      new ContactField("home", $("#txtEmail").attr("value"), true)//adding contents from input fields
                                      
                                      ];
                    contact.phoneNumbers = [
                                            new ContactField("mobile", $("#txtNumber").attr("value"), true )
                                            ]; 
 
        // save
        contact.save(onSaveSuccess,onSaveError);
        });
        
        $("#find").on("click" , function() {
                  
                  var fields = ["*"];
                  var options = {
                  filter: $("#txtFirst").attr("value"),
                  
                  multiple: true //returns multiple contacts with similar parameters
                  
                  };
                  
                  navigator.contacts.find( fields, function(contacts){
                                          
                                          
                                          $("#txtFirst").attr("value", contacts[0].name.givenName);
                                          $("#txtLast").attr("value", contacts[0].name.familyName);
                                          $("#txtEmail").attr("value", contacts[0].emails.value);
                                          $("#txtNumber").attr("value", contacts[0].name.phoneNumbers[0].value);
                                          
                                          
                                          
                                          }, function (error) {
                                          alert("error")
                                          },
                                          options );
                  
                  });
    }
 
    // onSaveSuccess: Get a snapshot of the current contacts
    //
    function onSaveSuccess(contact) {
        alert("Save Success");
    }
 
    // onSaveError: Failed to get the contacts
    //
    function onSaveError(contactError) {
        alert("Error = " + contactError.code);
    }