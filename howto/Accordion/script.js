var x = document.getElementsByClassName("accordion");
console.log(x);
	for(var i = 0; i < x.length; i++){
		x[i].addEventListener("click", function(){

		this.nextElementSibling.classList.toggle("active");
		this.classList.toggle("active");
	});}
// 	for (var i = 0; i < x.length; i++) {
// 		x[i].onclick= function(){
// 		this.nextElementSibling.classList.toggle("active")
// 	}

// }
	/*
	this use js core, now let's use jQuery
	 */
// $(document).ready(function(){
// 	var x = $(".accordion");
// 	for (var i = 0; i < x.length; i++) {
// 		x[i].click(function() {
// 			/* Act on the event */
// 			this.next.toggleClass('active');
// 			this.toggleClass('active');
// 		});
// 	}
// });

// var acc = $(".accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].click = function(){
//         this.toggleClass("active");
//         this.next().toggleClass('active');
//     }
// }

/*
wtfffffff is this???????????? move on
 */