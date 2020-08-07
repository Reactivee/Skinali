$(".menu-btn").on("click",function () {
	$(".menu").toggleClass("menu-active");
	console.log('uasda')	
})

$('input[type="tel"]').mask("(99)-999-99-99");
// function showmenu() {
// 	document.querySelector(".menu").toggleClass(".menu-active");
// 	console.log('asdsd')
// }

let rew= $("#map");
let rewTop=rew.offset().top;
$(window).bind("scroll",()=>{
	let windowtop=$(this).scrollTop();
	if(windowtop>rewTop){
		console.log('boldi');
		$("#map").html(`<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A604ce992959e1ec2c4a7ec1d626a47577eeee0fbd213683245e1072a87a73c81&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>`)
		$(window).unbind("scroll");
	}
})