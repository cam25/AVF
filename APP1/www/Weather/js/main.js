//jQuery(document).ready(function($) {
//  $.ajax({
//  url : "http://api.wunderground.com/api/8a277e134bd305b3/geolookup/conditions/q/21239.json",
//  dataType : "jsonp",
//  success : function(parsed_json) {
//  var location = parsed_json['location']['city'];
//  var location2 = parsed_json['location']['state'];
//  var zipcode = parsed_json['location']['zip'];
//  console.log(location);
//  var temp_f = parsed_json['current_observation']['temp_f'];
//  $('#weatherApi').append('<p>').html( '<p class="temp">' + temp_f + "</p>" + "<p class='degrees'>" + " degrees " + "</p>" +"<p>" + " in " + "</p>" + location + location2 + zipcode);
//   //alert("Current temperature in " + location + " is: " + temp_f);
//   console.log(parsed_json)
//   
//                         }
//  
//  
//  });
//});



var gps = navigator.geolocation;
		if (gps){//if gps run success
			alert("gps enabled");
			gps.getCurrentPosition(locationSuccess, locationError,
				function(error){
				  alert("Got an error, code: " + error.code + " message: " + 
						error.message);
			 
			 });
		} else {
			
		}
//show error 
function locationError(error){
    switch(error.code) {
        case error.TIMEOUT:
            showError("A timeout occured! Please try again!");
            break;
        case error.POSITION_UNAVAILABLE:
            showError('We can\'t detect your location. Sorry!');
            break;
        case error.PERMISSION_DENIED:
            showError('Please allow geolocation access for this to work.');
            break;
        case error.UNKNOWN_ERROR:
            showError('An unknown error occured!');
            break;
    }

}
//success 
function locationSuccess(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
console.log(lon);
console.log(lat);

    // We will make further requests to Yahoo's APIs here

var query = escape("lat"),
    url = "http://where.yahooapis.com/geocode?q="+lat +"," +lon+"&gflags=R&flags=JT&appid=cmozie&callback=?",//url to acquire geolocation with geo coordinates 
    url2 = "http://weather.yahooapis.com/forecastrss?w=12766322";//url to get forcast based on geolocation results woeid
    


$.getJSON(url, function (data) {
console.log(data.ResultSet.Results);
console.log(url2);

//appending coords + timezone to screen
    $("#weatherApi")
    .append("<li class='test'>" +
                            "<p>" +
                            
                           
                          
                            "<p>" + "Coordinates: " + data.ResultSet.Results[0].name  + "</p>" +
                            "<p>" + "TimeZone: " + data.ResultSet.Results[0].timezone  + "</p>" +
                             
                            "</p>" +
                            "</li>");
   
    console.log(data.ResultSet.Results[0].woeid);//woeid used for search
});


var query = escape('select item from weather.forecast where woeid="12766322"'),//escape converts string to url format, allows search by woeid provided through geo
    url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&callback=?";//adds query to search


$.getJSON(url, function (data) {
console.log(data);
//appending forcast
    $("#weatherApi").append(data.query.results.channel.item.title + "<br />" + data.query.results.channel.item.description + "<br />");
    console.log(data.query.results.channel.item);
});
};

//c62dd6erynej3zvm8up68nt4