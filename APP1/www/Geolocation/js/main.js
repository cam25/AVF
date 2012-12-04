// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    var watchID = null;
    

    // Cordova is ready
    //
    var onDeviceReady = function() {
        // Throw an error if no update is received every 30 seconds
        var options = { timeout: 10000 };
        watchID = navigator.geolocation.watchPosition(gpsYes, gpsNo, options);
    }
    

    // onSuccess Geolocation
    //
 var gpsYes = function(location) {
    var display = document.getElementById("geo");
    var html = [];
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    var accuracy = location.coords.accuracy;
    html.push("<img width='256' height='256' src='http://maps.google.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&markers=size:small|color:blue|" + latitude + "," + longitude + "&zoom=14&size=256x256&sensor=false' />");
    html.push("<p>Longitude: " + longitude + "</p>");
    html.push("<p>Latitude: " + latitude + "</p>");
    html.push("<p>Accuracy: " + accuracy + " meters</p>");
    display.innerHTML = html.join("");
}

    // onError Callback receives a PositionError object
    //
   var gpsNo = function(error) {
    alert('Gps Fail ' + error.message);
} 
onDeviceReady();