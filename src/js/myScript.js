$(document).ready(function(){

	$(window).scroll(( ) => {
		let scrollDistance = $(window).scrollTop();
		
		var modalToggle = document.getElementById('toggleMyModal') // relatedTarget
		myModal.show(modalToggle);

	});
});	


$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});



