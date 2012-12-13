document.addEventListener("deviceready", onDeviceReady, false);

	
function onDeviceReady() {
	onSuccess();
};
function onSuccess() {

$("#create").on("click" , function() {
	var contact = navigator.contacts.create();
	var name = null;
	
	contact.displayName = $("#txtFirst").attr("value") + " " + $("#txtLast").attr("value");
		
	contact.nickname = $("#txtFirst").attr("value") +  " " + $("#txtLast").attr("value");
	
	name = new ContactName();
	name.givenName = $("#txtFirst").attr("value");
	name.familyName = $("#txtLast").attr("value");
	contact.name = name;
	
	contact.emails = [
		new ContactField("home", $("#txtEmail").attr("value"), true)
		
	];
	contact.phoneNumbers = [
		new ContactField("mobile", $("#txtNumber").attr("value"), true )
	];
	
	contact.save( function () {
		$("#txtFirst").attr("value", "");
		$("#txtLast").attr("value", "");
		$("#txtEmail").attr("value", "");
		$("#txtNumber").attr("value", "");
		
	},
		function(){
			alert("error");
			
		});
	
});

$("#find").on("click" , function() {
	
	var fields = ["*"];
	var options = {
		filter: $("#txtLast").attr("value"),
		multiple: true
		
	};
	
	navigator.contacts.find( fields, function(contacts){
		
		$("#txtFirst").attr("value", contacts[0].name.givenName);
		$("#txtLast").attr("value", contacts[0].name.familyName);
		$("#txtEmail").attr("value", contacts[0].emails.value);
		$("#txtNumber").attr("value", contacts[0].name.phoneNumbers[0].value);
		

		
		}, function (error) {
			alert("error")
		},
		options );
	
});
};


