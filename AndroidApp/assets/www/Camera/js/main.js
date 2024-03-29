    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
       console.log(imageData);

      var smallImage = document.getElementById('smallImage');


      smallImage.src = "data:image/jpeg;base64," + imageData;
     
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
       alert(imageURI);

      var largeImage = document.getElementById('largeImage');

      largeImage.src = imageURI;
       
    }

    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL, encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: true });
  
    }


    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 70, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
   

    function onFail(message) {
      alert('Failed because: ' + message);
    }
    
    $("#takePic").on("click", function() {
	    
	    capturePhoto();
	    
    });
    
    
    $("#gallery1").on("click", function() {
	    
	    getPhoto(pictureSource.PHOTOLIBRARY);
                     
    });
    
   