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

// function openModal(idButton, idButtonClick) {
// 	var btn = document.getElementById('idButton');
// 	// var form = document.getElementById('idForm');
	
// 	document.getElementById(loginModal).style.display = 'block';
// 	document.getElementById(idButtonClick).click();
// }
var btnLogin = document.getElementById('openLoginForm');
btnLogin.onclick = function () {
	document.getElementById('loginModal').style.display = "block";
	document.getElementById('open-login').click();
}
var btnRegistry = document.getElementById('openRegistryForm');
btnRegistry.onclick = function () {
	document.getElementById('loginModal').style.display = "block";
	document.getElementById('open-registry').click();
}

function openTabForm(evt, tabId) {
	var i, tablinksForm, tabcontentsForm;
	tablinksForm = document.getElementsByClassName('button-form');
	for (i = 0; i < tablinksForm.length; i++) {
		tablinksForm[i].className = tablinksForm[i].className.replace(' active', '');
	}
	tabcontentsForm = document.getElementsByClassName('form-container');
	for (var i = 0; i < tabcontentsForm.length; i++) {
		tabcontentsForm[i].style.display = 'none';
	}
	document.getElementById(tabId).style.display = 'block';
	evt.currentTarget.className += ' active';
}
