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
   function onSuccess(position) {
        var element = document.getElementById('coordinates');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }
    console.log(position);
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
    }
    
onDeviceReady();