  // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        // Empty
        navigator.notification.alert(message, alertCallback, [title], [buttonName])
    }
 
 function showAlert() {
        navigator.notification.alert(
            'You are the winner!',  // message
            'Game Over',            // title
            'Done'                  // buttonName
        );
    }
    
    
    $('#alert').on("click", function(){
	    onDeviceReady()
	    
    });
    