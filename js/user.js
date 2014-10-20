window.onload = function(){

	getNewUser();
	// $( "#price" ).click(function() {
 // 		 updateUserDetails('Gal Gadot','LA','Israel','https://pbs.twimg.com/profile_images/3745808650/86333484235d0cc94edd1a3cf68929f4_400x400.jpeg',true);
 // 		})
	
};

function getNewUser(){

	//Call the API
	// $.ajax({
	// 	type: 'POST',
	// 	url: 'http://www.beepmeapp.com/bmaserver/api/mobile/users/',
	// 	dataType: 'jsonp',
	// 	success: function(data) {
	// 			console.log("asss");
	// 			// var name = data.message.first_name + data.message.last_name;
	// 			// var from = data.message.from;
	// 			// var to = data.message.to;
	// 			// var pic = null;
	// 			// var comment = (Math.random() > .5) ? true : false;
	// 			// updateUserDetails(name,from,to,pic,comment)
	// 		   }
	// });
	var number =  Math.floor((Math.random() * 100000) + 1);

	if(number%11 == 0)
	{
			updateUserDetails('Tom Amitay',
		'Akko',
		'Metula',
		'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c32.32.397.397/s160x160/522491_10151840837243636_544392766_n.jpg?oh=42599910b02d53fc4b7ada4eef777de4&oe=54F87C7F&__gda__=1420984540_cf4f9e6f264322dff6df576463e03e5d',
		 (Math.random() > .5) ? true : false);
	}
	else if(number%9 == 0)
	{
			updateUserDetails('Talking Tom Cat',
		'Natanya',
		'Rehovot',
		'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c15.15.183.183/s160x160/936111_588544374497321_715266300_n.jpg?oh=0960c49368fe7f87dee550ed28c4da73&oe=54B0CE7C&__gda__=1424781662_c689d46200a576f02a722ed0955f216a',
		 (Math.random() > .5) ? true : false);
	}
	else if(number%12 == 0)
	{
		updateUserDetails('Matan Elimelech',
		'Afula',
		'Ramat Gan',
		'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c44.44.550.550/s160x160/59763_10200146933769175_552389018_n.jpg?oh=0d28a2beefea45cd8d21adb3941e9c55&oe=54F6DE74&__gda__=1421109664_5df1d6f5ddff689dae33ecca34a05226',
		 (Math.random() > .5) ? true : false);
	}
	else if(number%7 == 0)
	{
			updateUserDetails('Sigal Mor',
		'Somewhere',
		'You know',
		'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c35.35.441.441/s160x160/1000786_10151687975829399_1984621474_n.jpg?oh=c94bce6bea9bb689136fb68a2662ba01&oe=54F09597&__gda__=1424817634_f05d305fac1695fdc79342d25117b44b',
		 (Math.random() > .5) ? true : false);
	}
	else if(number%5 == 0)
	{
		updateUserDetails('Stubb A Dub',
			'Ashqueluna',
			'Kfar Neter',
			'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.51.160.160/p160x160/10570456_10204493249151082_3502856708343972892_n.jpg?oh=a145213e0f24720ca80c7a04da2f44ee&oe=54BF42DC&__gda__=1420508621_014e9e7365c803cf7190a6b50621f6ee',
			 (Math.random() > .5) ? true : false);
	}
	else if(number%3 == 0)
	{
		updateUserDetails('Gal Gadot',
			'LA',
			'Israel',
			'https://pbs.twimg.com/profile_images/3745808650/86333484235d0cc94edd1a3cf68929f4_400x400.jpeg',
			 (Math.random() > .5) ? true : false);
	}

};
	// api.genericAJAXCall(api.root + 'api/mobile/users/','POST',{offset: uoffset <= 1 ? 1 : --uoffset , limit: 1},
 //        function(user){

 //            var elm = $($('.user')[0]);
 //            if(elm.data('id')!= user.fb_id){
 //            	console.log("asss");
 //                // elm = elm.clone();
 //                // elm.attr('data-id',user.fb_id);
 //                // elm.find('.pic').attr('src','https://graph.facebook.com/'+ user.fb_id +'/picture/?width=170&height=170');
 //                // elm.find('.name').html(user.first_name + '&nbsp;' + user.last_name);
 //                // elm.find('.from_to').html(user.from + '&nbsp;<big>›</big>&nbsp;' + user.to);
 //                // $('.user').first().before(elm);

 //                // $('.ticker').css({'top':$('.user').first().outerHeight() * -1});

 //                // $('.ticker').animate({top: '0px'},2000,function(){getNextUser()});

 //                // getFigures();

 //            }
 //        },null, true);


// function aaa(){
// 	$.get('http://www.beepmeapp.com/bmaserver/api/mobile/users/', function(data){
//  			console.log(data);
// 					var name = data.message.first_name + data.message.last_name;
// 					var from = data.message.from;
// 					var to = data.message.to;
// 					var pic = null;
// 					var comment = (Math.random() > .5) ? true : false;
// 					updateUserDetails(name,from,to,pic,comment)
// 	});
// }

function updateUserDetails(name, from, to, pic, comment){
	// Set name
	if(name != null)
	{
		$( "#name" ).text(name);
	}
	if(from != null)
	{
		$( "#fromLocation" ).html(from);
	}
	if(to != null)
	{
		$( "#desLocation" ).text(to);
	}
	if(comment != null)
	{
		if(comment == false)
		{
			$( "#message" ).attr('src','img/icon_comment.png');
		}
		else
		{
			$( "#message" ).attr('src','img/icon_with_comment.png');
		}
	}
	if(pic != null){
		$( "#photo" ).attr('src',pic);
	}
	var price = Math.floor((Math.random() * 10) + 1);
	$('#price').html(price + '$')
};

