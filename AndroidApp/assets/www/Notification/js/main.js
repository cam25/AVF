    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    var message = 'Are you sure you want Gallery';
    var title = "Choices";
    var buttonLabels = "Yes, No";
    function onDeviceReady() {
		showConfirm();	    
	    };

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
    if( buttonIndex === "Yes"){
        alert('Okay, Heres Your Pictures ' + buttonIndex);
        }
        else {
      
        }
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