/*
Author: Tammy-Elizabeth Knox 
Email: tammyknox@elizaknox.me
Date: September 13, 2015
Content: My personal website and portfolio
*/

$(function(){//This will scroll to the specified element upon clicking a button
	$(".one").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".nav-container").offset().top
		}, 'slow');
	});

	$(".two").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".about").offset().top
		}, 'slow');
	});

	$(".three").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".services").offset().top
		}, 'slow');
	});

	$(".four").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".portfolio").offset().top
		}, 'slow');
	});

	$(".five").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".nonprofit").offset().top
		}, 'slow');
	});

	$(".six").on("click", function(){
		$('html,body').animate({
			scrollTop: $(".contact").offset().top
		}, 'slow');
	});

	$('#btn').on("click", function(){
		$('html,body').animate({
			scrollTop: $(".services").offset().top
		}, 'slow');
	});
});
