//Slide left if hovering over block
$(".main").mouseenter(function(){
	$(this).animate({
		right: "10vw"
	}, 500);
}).mouseleave(function(){
	$(this).animate({
		right: "0"
	}, 500);
});

//https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f