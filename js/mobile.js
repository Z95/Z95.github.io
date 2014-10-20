var i =1;
var numberOfPixelsToMove = 112;
var currentTop = 0;

window.onload = function(){
	 setInterval(function(){loadUsers()},2000);
};


function loadUsers(){
	currentTop = currentTop - numberOfPixelsToMove ;
	$('.Layer1').animate({top: currentTop+'px'},1000,function(){getNextUser()});

	// update element hight in order to enter new element
	var originalHeight = $('.Layer1').height(); 
	$('.Layer1').css("height", originalHeight + numberOfPixelsToMove);
};

function getNextUser(){
	console.log("ziv: get next user " + i);
	i++;
	var name = 'user'+i;
	$('<iframe />', {
    name:   'FRAME1',
    id:   name,
					}).appendTo('.Layer1');	

	$('#'+name).attr('src', 'user.html'); 
	$('#'+name).attr('frameborder', '0'); 
	$('#'+name).attr('scrolling', 'no'); 
};