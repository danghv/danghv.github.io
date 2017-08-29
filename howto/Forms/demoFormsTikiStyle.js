// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openForm(idForm, evt) {
	var tablinks, tabcontents, i;
	tablinks = document.getElementsByClassName('tab-links');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	tabcontents = document.getElementsByClassName('tab-contents');
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = 'none';
	}
	document.getElementById(idForm).style.display = 'block';
	evt.currentTarget.className += ' active';

}
document.getElementById('openDefault').click();