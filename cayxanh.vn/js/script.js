//process navbar

function toggleMenu() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

window.addEventListener("scroll", function(){
	var topnav = document.getElementById('myTopnav');

if(document.documentElement.scrollTop > 150){
	topnav.classList.add('fix-topnav');
} else {
	topnav.classList.remove('fix-topnav');
}
});

function openModal(evt, modalName) {
	var i, modals, modaltablinks;
	modals = document.getElementsByClassName('modal-style');
	for (var i = 0; i < modals.length; i++) {
		modals[i].style.display = 'none';
	}	
	modaltablinks = document.getElementsByClassName('modal-tablinks');
	for (var i = 0; i < modaltablinks.length; i++) {
		modaltablinks[i].className = modaltablinks[i].className.replace(' active', '');
	}
	document.getElementById(modalName).style.display = 'block';
	evt.currentTarget.className += ' active';
}
function displayModal(idButton) {
	document.getElementById('modalId').style.display = "block";
	document.getElementById(idButton).click();
}
