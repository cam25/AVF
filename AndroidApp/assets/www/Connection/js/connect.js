document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    connectionType();
}

var connectionType = function(){
      alert(navigator.network.connection.type);
    }