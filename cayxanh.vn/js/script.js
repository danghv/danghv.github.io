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

