$(document).ready(function() {
	
	var cantidad = document.getElementById("cant").value;
	var precio = document.getElementById("precio").value;

	total = precio * cantidad;
	document.getElementById("total").value = "$"+total;
	
});