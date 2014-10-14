window.onload = function() {
	
	//first init
	$.ajax({
			type: "GET",
			url: "http://www.beepmeapp.com/bmaserver/web/vanity",
			dataType: "jsonp"
				}).then(function(data) {
					var number = data.message.totalRides;
					$("#numOfRides").text(number.toLocaleString("de-DE"));
					console.log("Number of rides " + number);			   

				   });
	//interval every 10 seconds	
	setInterval(function(){
		 $.ajax({
			type: "GET",
			url: "http://www.beepmeapp.com/bmaserver/web/vanity",
			dataType: "jsonp"
				}).then(function(data) {
					var number = data.message.totalRides;
					$("#numOfRides").text(number.toLocaleString("de-DE"));
					console.log("Number of rides " +  number);			   

				   });
	},10000);
	console.log("ziv: loaded successfuly")

	$( "#loginButton" ).click(function() {
 		 alert( "פייסבוק וכו" );
});
}

