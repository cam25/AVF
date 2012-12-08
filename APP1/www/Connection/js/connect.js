document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Connection Not Known';
    states[Connection.WIFI]     = 'WiFi ';
    states[Connection.CELL_3G]  = '3g';
    states[Connection.CELL_4G]  = '4G connection';
    states[Connection.NONE]     = 'No network connection';
    
    alert('Your Connected To... ' + states[networkState]);
}