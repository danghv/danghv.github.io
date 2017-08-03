// var buttons = document.getElementsByClassName("tablinks");
// for (var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener("click", function(){

// 	});
// }


//jQuery

function displayPara(evt, cityName) {
		var i, tabcontents, tablinks;
		tabcontents = $(".tabcontent");
		
		
		for (i = 0; i < tabcontents.length; i++) {
			tabcontents[i].style.display = 'none';
		}
		tablinks = $(".tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '');
		}
		$('#'+ cityName).css({"display":"block"});
		evt.currentTarget.className += ' active';
    }
// $(document).ready(function(){

// });
