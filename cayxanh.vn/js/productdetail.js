//process navbar

function toggleMenu() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

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

//process product tab

function openProductTab(evt, nameTab) {
	var i, tablinkProducts, tabcontentProducts;
	tablinkProducts = document.getElementsByClassName('tablink-product');
	for (i = 0; i < tablinkProducts.length; i++) {
		tablinkProducts[i].className = tablinkProducts[i].className.replace(' active', '');
	}
	tabcontentProducts = document.getElementsByClassName('tabcontent-product');
	for (i = 0; i < tabcontentProducts.length; i++) {
		tabcontentProducts[i].style.display = 'none';
	}
	document.getElementById(nameTab).style.display = 'block';
	evt.currentTarget.className += ' active';
}
document.getElementById("defaultOpenProductReview").click();

function countProduct (number){
	var elm = document.getElementById('counterProduct');
	elm.innerHTML = Number(elm.innerHTML) + number;
}