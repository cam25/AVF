String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23")
        return t.link("http://search.twitter.com/search?q="+tag);
    });
};
String.prototype.parseURL = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
        return url.link(url);
    });
    
    };
    String.prototype.parseUsername = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
        var username = u.replace("@","")
        return u.link("http://twitter.com/"+username);
    });
};


     var options = { timeout: 5000 };

    // onSuccess Geolocation
    //
 var gpsYes = function(location) {
	 alert("gpsYess");
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;
    var accuracy = location.coords.accuracy;



};




    
$.ajax({
			url: "http://search.twitter.com/search.json?q=google&rpp=5&include_entities=true&result_type=mixed?callback=?",
			type: "GET",
			dataType: "json",
			success: function(json){
			navigator.geolocation.getCurrentPosition(gpsYes, gpsNo, options);
			
				alert("JSON data retrieved successfully!");
				console.log(json);
				console.log(gpsYes.latitude);
				for (i=0, j=json.results.length; i<j; i++) {
                $("#apiData")
                    .append("<li class='test'>" +
                            "<p>" +
                            "<img class='twitpic' src='"  + json.results[i].profile_image_url + "' />" +
                            " <a >" + json.results[i].from_user + "</a>" +
                            "<p>" + json.results[i].text.parseURL().parseHashtag().parseUsername() + "</p>" +
                            "<p>" + json.results[i].created_at+ "</p>" +
                            "<p>" + latitude + "</p>" +
                             
                            "</p>" +
                            "</li>");
                }
			},
			error: function(result){
			console.log(result);
				console.log(result);
			}
		});
	

	
//	$.ajax({
//	url: "http://search.twitter.com/search.json?q=%40google",
//	dataType : "json",
//		success : function(data) {
//            $("#twitterFeed")
//            .html("<p>Twitter Feed Load Succsessful.</p>");
//            console.log(data);
//            for (i=0, j=data.results.length; i<j; i++) {
//                $("#apiData")
//                    .append("<li>" +
//                            "<p>" +
//                            "<img src='" + data.results[i].profile_image_url + "' />" +
//                            " <a>" + data.results[i].from_user + "</a>" +
//                            "<p>" + data.results[i].text + "</p>" +
//                            "<p>" + data.results[i].created_at + "</em>" +
//                            "</p>" +
//                            "</li>");
//                },
//                error: function(status, result){
//				console.log(status, result);
//			}
//        };
//		
//	});
	


//jQuery(function ($) {
//    $("#ticker").tweet({
//        username: "google", // define your twitter username
//        page: 1,
//        avatar_size: 32, // avatar size in px
//        count: 20, // how many tweets to show
//        loading_text: "loading ..."
//    }).bind("loaded", function () {
//        var ul = $(this).find(".tweet_list");
//        var ticker = function () {
//                setTimeout(function () {
//                    ul.find('li:first').animate({
//                        marginTop: '-4em'
//                    }, 500, function () {
//                        $(this).detach().appendTo(ul).removeAttr('style');
//                    });
//                    ticker();
//                }, 4000); // duration before next tick (4000 = 4 secs)
//            };
//        ticker();
//    });
//});