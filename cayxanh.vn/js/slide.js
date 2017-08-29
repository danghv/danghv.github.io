// process slides
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
	showSlides(slideIndex += n);
	console.log(slideIndex);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('my-slides');
	var dots = document.getElementsByClassName('slide-dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n<1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';

	console.log(slides[slideIndex - 1].className);
}

//process tab new content Hot Trends

function openContent(evt, tabId, btnId) {
	var i, tablinks, tabcontents;
	var justifyButton = document.getElementById('justify-button');
	var x = document.getElementById(btnId);

	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	tabcontents = document.getElementsByClassName('tabcontent');
	for (var i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = 'none';
	}
	document.getElementById(tabId).style.display = 'block';
	
	evt.currentTarget.className += ' active';

	justifyButton.innerHTML = 'Xem tất cả '
	justifyButton.innerHTML += x.firstElementChild.innerHTML;
}

document.getElementById('openDefault').click();

//process Cay xanh vuon nha
function openContentGarden(evt, tabId, btnId) {
	var i, tablinksGarden, tabcontentsGarden;
	var justifyButtonGarden = document.getElementById('justify-button-garden');
	var x = document.getElementById(btnId);
	tablinksGarden = document.getElementsByClassName('tablinks-garden');
	for (i = 0; i < tablinksGarden.length; i++) {
		tablinksGarden[i].className = tablinksGarden[i].className.replace(' active', '');
	}
	tabcontentsGarden = document.getElementsByClassName('tabcontent-garden');
	for (i = 0; i < tabcontentsGarden.length; i++) {
		tabcontentsGarden[i].style.display = 'none';
	}
	document.getElementById(tabId).style.display = 'block';
	evt.currentTarget.className += ' active';
	justifyButtonGarden.innerHTML = 'Xem tất cả '
	justifyButtonGarden.innerHTML += x.firstElementChild.innerHTML;
}

document.getElementById('openDefaultGarden111').click();

//process sản phẩm Hỗ Trợ

function openContentSupport(evt, tabId, btnId) {
	var i, tablinksSupport, tabcontentsSupport;
	var justifyButtonSupport = document.getElementById('justify-button-support');
	var x = document.getElementById(btnId);
	tablinksSupport = document.getElementsByClassName('tablinks-support');
	for (i = 0; i < tablinksSupport.length; i++) {
		tablinksSupport[i].className = tablinksSupport[i].className.replace(' active', '');
	}
	tabcontentsSupport = document.getElementsByClassName('tabcontent-support');
	for (var i = 0; i < tabcontentsSupport.length; i++) {
		tabcontentsSupport[i].style.display = 'none';
	}
	document.getElementById(tabId).style.display = 'block';
	evt.currentTarget.className += ' active';
	justifyButtonSupport.innerHTML = 'Xem tất cả '
	justifyButtonSupport.innerHTML += x.firstElementChild.innerHTML;
}

document.getElementById('openDefaultSupport').click();

