function si(){
	
	caja1 = document.getElementById("txtdescripcion").value;

	//Validacion Nombres

	if (caja1.length >= 35) {
		Swal.fire({
  			icon: 'error',
  			title: 'Oops...',
 			text: 'Sólo se permiten menos de 35 letras para la Descripcion!',
  
})
		return false;
	}
	
	else if (/^\s+$/.test(caja1)) {
		document.getElementById("txtdescripcion").focus();
		document.getElementById("txtdescripcion").style.borderColor = "green";
		return true;
	}

	else if (/^([0-9])*$/.test(caja1)) {
		alert("El valor " + caja1 + " el campo Descripcion no es valido");
		document.getElementById("txtdescripcion").focus();
		document.getElementById("txtdescripcion").style.borderColor = "red";
		return false;
	}

	else if (caja1.length <= 3) {
		Swal.fire({
  			icon: 'error',
  			title: 'Oops...',
 			text: 'Sólo se permiten mas de 3 letras para la Descripcion!',
		})
		return false;
	}
}