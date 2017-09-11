

function plus(number, numberId, rowId){
	var dongia = document.getElementById('dongiarow1').innerHTML;
	var dongiaConvert = dongia.substring(0, dongia.length - 4).replace(/\./g, "");
	var quantity = Number(document.getElementById(numberId).innerHTML);
	var rowtotalStr = Number(dongiaConvert) * (quantity + number);
	document.getElementById(numberId).innerHTML = quantity + number;
	document.getElementById(rowId).innerHTML = rowtotalStr.toLocaleString('vi') + ' vnđ';
	
}

