function si() {

	caja1 = document.getElementById("txtnombre").value;

	//Validacion Nombres

	if (caja1.length >= 35) {
		Swal.fire({
			title: 'Error!',
			text: 'Sólo se permiten menos de 35 letras para el nombre',
			icon: 'error',
			confirmButtonText: 'Cerrar'
		})
		return false;
	}



	else if (/^\s+$/.test(caja1)) {
		document.getElementById("txtnombre").focus();
		document.getElementById("txtnombre").style.borderColor = "green";
		return true;
	}

	else if (/^([0-9])*$/.test(caja1)) {
		alert("El valor " + caja1 + " en el campo nombre no es valido");
		document.getElementById("txtnombre").focus();
		document.getElementById("txtnombre").style.borderColor = "red";
		return false;
	}

	else if (caja1.length <= 2) {
		alert("Sólo se permiten mas de 2 letras para el nombre")
		return false;
	}

	//Validacion Apellidos


	caja2 = document.getElementById("txtapellido").value;

	if (caja2.length >= 35) {
		alert("Sólo se permiten de 35 letras para los apellidos")
		return false;
	}

	else if (/^\s+$/.test(caja2)) {
		document.getElementById("txtapellido").focus();
		document.getElementById("txtapellido").style.borderColor = "green";
		return true;
	}


	else if (/^([0-9])*$/.test(caja2)) {
		alert("El valor " + caja2 + " en el campo Apellidos no es valido");
		document.getElementById("txtapellido").focus();
		document.getElementById("txtapellido").style.borderColor = "red";
		return false;
	}

	else if (caja2.length <= 2) {
		alert("Sólo se permiten mas de 2 letras para el apellido")
		return false;
	}
}