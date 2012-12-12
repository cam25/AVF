String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23");
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
        var username = u.replace("@","");
        return u.link("http://twitter.com/"+username);
    });
};

function gotGps(){
        var gps = navigator.geolocation;
        if (gps){//if gps has error 
            gps.getCurrentPosition(twitterSearch,
                   function(error){
                alert("Got an error, code: " + error.code + " message: "+ error.message);
             });
        } else {//run search function
            twitterSearch();
        }
    }
    function twitterSearch(position){
        var query = "http://search.twitter.com/search.json?callback=searchResults&q=";

         query += $("searchField").value;
        console.log(searchField.value);
        console.log(query);
        if (position){//postion from coords 
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            query += "&geocode=" + escape(latitude + "," + longitude + ",50mi");//escape used to encode  strings inside url
        }
        var script = document.createElement("script");
        script.src = query;
        console.log(script);
        $("head")[0].appendChild(script);
        
        console.log(script.src);
    }
    function searchResults(response){
        
        var tweets = response.results;
        console.log(tweets);
        for (i=0, j=tweets.length; i<j; i++) {
              
                
         $("#results")
                    .append("<li class='test'>" +
                            "<p>" +
                            "<img class='twitpic' src='"  + tweets[i].profile_image_url + "' />" +
                            " <a >" + tweets[i].from_user + "</a>" +
                            "<p>" + tweets[i].text.parseURL().parseHashtag().parseUsername() + "</p>" +
                            "<p>" + tweets[i].created_at + "</p>" +
                            "<p>" + "location:" + tweets[i].location + "</p>" +
                             
                            "</p>" +
                            "</li>");
        
        
        }
        };
    
    
    $("#GO").on("click", function() {
    
       gotGps();
        
    });