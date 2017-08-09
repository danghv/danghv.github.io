//process navbar

function toggleMenu() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

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

function openContent(evt, tabId) {
	var i, tablinks, tabcontents;
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
}

document.getElementById('openDefault').click();

//process Cay xanh vuon nha
function openContentGarden(evt, tabId) {
	var i, tablinksGarden, tabcontentsGarden;
	tablinksGarden = document.getElementsByClassName('tablinks-garden');
	for (i = 0; i < tablinksGarden.length; i++) {
		tablinksGarden[i].className = tablinksGarden[i].className.replace(' active', '');
	}
	tabcontentsGarden = document.getElementsByClassName('tabcontent-garden');
	for (var i = 0; i < tabcontentsGarden.length; i++) {
		tabcontentsGarden[i].style.display = 'none';
	}
	document.getElementById(tabId).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.getElementById('openDefaultGarden').click();

//process sản phẩm Hỗ Trợ

function openContentSupport(evt, tabId) {
	var i, tablinksSupport, tabcontentsSupport;
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
}

document.getElementById('openDefaultSupport').click();

// process slide product detail

var slideIndex1 = 1;
showProductSlides(slideIndex1);
document.getElementById('openDefaultImage').click();

function currentProductSlide(n) {
	showProductSlides(slideIndex1 = n);
}

function showProductSlides(n) {
	var j;
	var productSlides = document.getElementsByClassName('product-slides');
	if (n > productSlides.length) {
		slideIndex1 = 1;
	}
	if (n<1) {
		slideIndex1 = productSlides.length;
	}
	for (j = 0; j < productSlides.length; j++) {
		productSlides[j].style.display = 'none';
	}
	productSlides[slideIndex1 - 1].style.display = 'block';
	
}
