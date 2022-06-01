$(document).ready(function(){

	$(window).scroll(( ) => {
		let scrollDistance = $(window).scrollTop();
		

	});
});	


$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});



