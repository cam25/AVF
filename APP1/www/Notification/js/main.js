  // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    var message = "You Are the Winner!";
    var title = "Game Over";
    var buttonName = "Done";
    function onDeviceReady() {
        // Empty
        
        navigator.notification.alert(message, [title], [buttonName])
    }
 
 function showAlert() {
        navigator.notification.alert(
            message,  // message
            title,            // title
            buttonName                  // buttonName
        );
    }
    
    
    $('#alert').on("click", function(){
	    onDeviceReady()
	    
    });
    