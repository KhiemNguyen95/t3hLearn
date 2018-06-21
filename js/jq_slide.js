$(function(){
	let active = 0;
	let items  = $('.slide-item');
	// onclick btnNext
	$('#btnNext').click(function(){
		active = ++active > 2 ? 0:active;
		slide(active,items);
	});
	// onclick btnPre
	$('#btnPre').click(function(){
		active = --active < 0 ? 2:active;
		slide(active,items);
	});
});

let slide = (postion,slideItems) =>{
	for(let i = 0; i<slideItems.length; i++){
		if(postion == i){
			slideItems.eq(i).css('display','block');
		} else{
			slideItems.eq(i).css('display','none');
		}
	}
};