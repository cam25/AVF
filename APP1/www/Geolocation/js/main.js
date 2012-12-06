// Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

   
    

    // Cordova is ready
    //
    function onDeviceReady() {
        // Throw an error if no update is received every 30 seconds
        var options = { timeout: 5000 };
        navigator.geolocation.getCurrentPosition(gpsYes, gpsNo, options);
    };
    

    // onSuccess Geolocation
    //
 var gpsYes = function(location) {
    var display = $("#geo"); // grabbing the div id geo
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    var accuracy = location.coords.accuracy;
    $("#geo").append("<img class='map' width='100%' height='100%' src='http://maps.google.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&markers=size:small|color:red|" + latitude + "," + longitude + "&zoom=14&size=1024&x1024&sensor=false' />" +  "<p>Longitude: " + longitude + "</p>" + "<p>Latitude: " + latitude + "</p>" + "<p>Accuracy: " + accuracy + " meters</p>" );//appends the map to page



};

    // onError Callback receives a PositionError object
    //
   var gpsNo = function(error) {
    alert('Gps Fail ' + error.message);
    
    };
    
    

    $("#button").on("click", function() {
	    
	    onDeviceReady();
	    
    });