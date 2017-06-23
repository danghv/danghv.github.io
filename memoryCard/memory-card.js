var cards = [1, 2, 3, 4, 5];
var current = null;
var count = 0;
var remainingTime = 30;
function shuffle(arr){
	var currentIndex = arr.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		// console.log(randomIndex);
		currentIndex -= 1;
		//swap randomIndex and currentIndex
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;

	}
}

function flip(card){
	//Disable click this card
	$(card).css('pointer-events','none');
	//Flip this card
	$(card).toggleClass('flipped');
	if (!current) {
		current = $(card);
	} else {
		//disable click all cards
		$('.card').css('pointer-events', 'none');
		if (current.attr('data-name') != $(card).attr('data-name')) {
			console.log('Khac nhau');
			setTimeout(function(){
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;
				document.getElementById('false-music').load();
    			document.getElementById('false-music').play();
				//enable click all cards
				$('.card').css('pointer-events', 'auto');
		}, 500);

		} else {
			console.log('giong nhau');
			setTimeout(function(){
				$(card).css('opacity', 0);
				current.css('opacity', 0);
				current = null;
				count++;
				document.getElementById('true-music').load();
    			document.getElementById('true-music').play();
				//enable click all cards
				$('.card').css('pointer-events', 'auto');
				if(count == 5){
					$('#myModal-win').modal('show');

				}
			}, 200);

		}
	}
}

function refreshGame() {
    window.location.reload(true);
}
$(function() {

	// double array	
	cards = cards.concat(cards);
	shuffle(cards);
	// render cards

	var html = '';
	for (var i = 0; i < cards.length; i++) {
		html += '<div class="grid">' + 
		'<div class="card" data-name="' + cards[i] + '" onclick="flip(this)">' + 
		'<div class="front"><img src="back.jpg"/></div>' +
		'<div class="back"><img src="' + cards[i] + '.jpg"/></div>' +
		'</div></div>';
		

	}
	$('.content').html(html);
	document.getElementById('audio').load();
   	document.getElementById('audio').play();
	var run = setInterval(function(){
		remainingTime--;
		console.log(remainingTime);
		$('.progress-bar').attr({
    		"style":"width:"+(remainingTime/30*100)+"%"
      
    	});
  		$('#myBar').html(Math.floor(remainingTime/30*100 )+ '%');
		// Time out
		if(remainingTime == 0) {
			// document.getElementById('audio').ended;
			// end game
			clearInterval(run);
			$('#myModal-lose').modal('show');
		}
	}, 1000);

});
