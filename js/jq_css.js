$(function(){
	// button click button[type="button"]
	$('#btCss').click(function(){
		// single css
		$('div.content').css('width','300px');
		$('div.content').css('height','300px');
		$('div.content').css('border','1px solid red');
		// multil css
		$('div.content').css({
			background:'red',
			marginTop: '50px',
			padding: '20px'
		});
		// get height width
		let w = $('div.content').width();
		let h = $('div.content').height();
		console.log(` height ${h} - width ${w} `);
		// content + padding
		let inw = $('div.content').innerWidth();
		let inh = $('div.content').innerHeight();
		console.log(` height ${inh} - width ${inw} `);
		// set height width
		/*$('div.content').width(500);
		$('div.content').height(500);
		let kw = $('div.content').width();
		let kh = $('div.content').height();
		console.log(` height ${kh} - width ${kw} `);*/

		// set width = content + padding
		$('div.content').innerWidth(1000);

	});
	$('#bt_box').click(function(){
		// $('div.box p').eq(2).css('color','blue');

		$('div.box p').filter('.last-child').css('color','red');

		// 
		$('div.box ul li').not('.second').css('color','green');
		// is
		if($('#check').is(':checked')){
			$('div.box ul li').css('color','yellow');
		} else{
			$('div.box ul li').css('color','black');
		}
		// 
		$('div.box ul').find('li.find').css('color','violet');
		// 
		$('div.box ul').find('li.find').next().next().css('color','blue')
		$('div.box ul').find('li.find').prev().css('color','gray');

	});
	// dom
	$('#btnHide').click(function(){
		/*$('div.dom span').after('<h1>js</h1>');
		$('div.dom h4').empty();
		$('div.dom h4').html('da them noi dung');

		let texts = $('div.dom span').html();
		texts = $('div.dom span').text('dg hoc jq');
		alert(texts);*/

		// $('div.dom').fadeOut(1000); //opacity
		// $('div.dom').hide(1000);
		$('div.dom').slideUp(1000);

	});
	$('#btnShow').click(function(){
		// $('div.dom').fadeIn(1000);
		// $('div.dom').show(1000);
		$('div.dom').slideDown(1000);

	});
	$('#btnTog').click(function(){
		// $('div.dom').toggle(1000);
		$('div.dom').slideToggle(1000);

	});
});