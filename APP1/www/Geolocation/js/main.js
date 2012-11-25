//geo

// Set an event to wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is loaded and Ready
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// Display `Position` properties from the geolocation
//
function onSuccess(position) {
    var div = document.getElementById('gps');
    
    div.innerHTML = 'Latitude: '             + position.coords.latitude  + '<br/>' +
    'Longitude: '                            + position.coords.longitude + '<br/>' +
    'Altitude: '                             + position.coords.altitude  + '<br/>' +
    'Accuracy: '                             + position.coords.accuracy  + '<br/>' +
    'Altitude Accuracy: '                    + position.coords.altitudeAccuracy  + '<br/>' +
    'Heading: '                              + position.coords.heading   + '<br/>' +
    'Speed: '                                + position.coords.speed     + '<br/>';
}

// Show an alert if there is a problem getting the geolocation
//
function onError() {
    alert('onError!');
}