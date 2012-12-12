document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is loaded and it is now safe to make calls Cordova methods
    //
    function onDeviceReady() {
        connection();
        $("#checkConnect").on("click", connection );
    }

     
//       var connectionType = function(){
//      alert("Connected To:" + navigator.connection.type);
//		  
//      };

function connection(){
switch( navigator.connection.type)

	{
	case Connection.WIFI:
		$("#images").attr("src", "img/wifi_icon.jpg");
		break;
	case Connection.CELL_3G:
		$("#images").attr("src", "img/3g.png");
		break;
	case Connection.CELL_4G:
		$("#images").attr("src", "img/4g.jpg");
		break;
		
	
	
}
};