// khoi tao jq load xong html
$(function(){
	// jquery code here

	$('button[type="button"]').click(function(){
		let data = $('#title').attr('id');
		let data1 = $('.text').prop('class'); 
		let myClass = $('#title').hasClass('text');
		$('#title').removeClass('text');
		$('#title').addClass(':)');
		$('#title').toggleClass('tog');
		console.log(myClass);
		console.log(data,data1);
	});
	// change img
	$('#changeImg').click(function(){
		$('img').attr('src','resources/image/K.png');
	});

	// change type
	$('#changeType').click(function(){
		// $('#input').attr('type','button');
		$('#input').removeAttr('placeholder');
		let value = $('#input').val().trim();
		console.log(value);
	});
});