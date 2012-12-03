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
var query = escape('select item from weather.forecast where location="20785"'),
    url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&callback=?";
 var location = Latitude: 38.911974 Longitude: -76.8789536

$.getJSON(location, function (data) {
    $("#weatherApi").append(data.query.results.channel.item.title + "<br />" + data.query.results.channel.item.description + "<br />");
    console.log(data.query.results.channel.item);
});


//c62dd6erynej3zvm8up68nt4