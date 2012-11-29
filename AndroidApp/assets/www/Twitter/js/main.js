//Twitter Feed

// Popular
//
//$(function() {
//  $.getJSON("http://search.twitter.com/search.json?q=blue%20angels&rpp=5&include_entities=true&result_type=mixed?callback=?",
//            function(data) {
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
//                }
//        });
//  });

$.ajax({
			url: "http://search.twitter.com/search.json?q=blue%20angels&rpp=5&include_entities=true&result_type=mixed?callback=?",
			type: "GET",
			dataType: "json",
			username: "google", // define your twitter username
        page: 1,
        avatar_size: 32, // avatar size in px
        count: 20, // how many tweets to show
        loading_text: "loading ...",
			success: function(json){
				alert("JSON data retrieved successfully!");
				console.log(json);
				for (i=0, j=json.results.length; i<j; i++) {
                $("#apiData")
                    .append("<li class='test'>" +
                            "<p>" +
                            "<img src='" + json.results[i].profile_image_url + "' />" +
                            " <a>" + json.results[i].from_user + "</a>" +
                            "<p>" + json.results[i].text + "</p>" +
                            "<p>" + json.results[i].created_at + "</em>" +
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
	


jQuery(function ($) {
    $("#ticker").tweet({
        username: "google", // define your twitter username
        page: 1,
        avatar_size: 32, // avatar size in px
        count: 20, // how many tweets to show
        loading_text: "loading ..."
    }).bind("loaded", function () {
        var ul = $(this).find(".tweet_list");
        var ticker = function () {
                setTimeout(function () {
                    ul.find('li:first').animate({
                        marginTop: '-4em'
                    }, 500, function () {
                        $(this).detach().appendTo(ul).removeAttr('style');
                    });
                    ticker();
                }, 4000); // duration before next tick (4000 = 4 secs)
            };
        ticker();
    });
});