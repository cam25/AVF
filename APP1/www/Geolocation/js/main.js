// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;
    

    // Cordova is ready
    //
    function onDeviceReady() {
        // Throw an error if no update is received every 30 seconds
        var options = { timeout: 10000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }
    

    // onSuccess Geolocation
    //
    var onSuccess = function(position) {
        alert('Latitude: '  + position.coords.latitude             + '\n' +
              'Longitude: ' + position.coords.longitude            + '\n' +
              'Timestamp: ' + new Date(position.timestamp * 1000)  + '\n');
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
    }
    
