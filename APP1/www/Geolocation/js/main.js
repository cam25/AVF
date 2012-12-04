// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;
    

    // Cordova is ready
    //
    function onDeviceReady() {
        // Throw an error if no update is received every 30 seconds
        var options = { timeout: 10000 };
        watchID = navigator.geolocation.watchPosition(gpsYes, gpsNo, options);
    }
    

    // onSuccess Geolocation
    //
 var gpsYes = function(location) {
    var message = document.getElementById("geo"), html = [];
    html.push("<img width='256' height='256' src='http://maps.google.com/maps/api/staticmap?center=", location.coords.latitude, ",", location.coords.longitude, "&markers=size:small|color:blue|", location.coords.latitude, ",", location.coords.longitude, "&zoom=14&size=256x256&sensor=false' />");
    html.push("<p>Longitude: ", location.coords.longitude, "</p>");
    html.push("<p>Latitude: ", location.coords.latitude, "</p>");
    html.push("<p>Accuracy: ", location.coords.accuracy, " meters</p>");
    message.innerHTML = html.join("");
}

    // onError Callback receives a PositionError object
    //
   var gpsNo = function(error) {
    alert('Gps Fail ' + error.message);
} 
onDeviceReady();