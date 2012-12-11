// The watch id references the current `watchAcceleration`


// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);
var watchID = 0;
// Cordova is ready
//
function onDeviceReady() {
    
    $("#watchButn").bind("touchstart", function() {
                         if( watchID ===  0){
                         startWatch();
                         
                         $("#watchButn").html("stop watching")
                         }else {
                         stopWatch()
                         $("#watchButn").html("Start Watching")
                         watchID = 0;
                         }
                         })
};

// Start watching the acceleration
//
function startWatch() {
    
    // Update acceleration every 3 seconds
    var options = { frequency: 3000 };
    
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
//
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
    $("#txtX").attr("value", acceleration.x);
    $("#txtY").attr("value", acceleration.y);
    $("#txtZ").attr("value", acceleration.z);
    
    
}

// onError: Failed to get the acceleration
//
function onError() {
    alert('onError!');
}