    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    var message = 'You are the winner!';
    var title = "game over";
    var buttonLabels = "restart, exit";
    function onDeviceReady() {
		showConfirm();	    
	    };

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
    console.log(navigator);
        navigator.notification.confirm(
            message,  // message
            onConfirm,              // callback to invoke with index of button pressed
            title,            // title
            buttonLabels          // buttonLabels
        );
    }
    
    onDeviceReady();
    $('#alert').on("click", function(){
    
	    
	    
    });
    