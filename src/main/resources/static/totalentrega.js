
$(document).ready(function() {
	numero = document.getElementsByClassName("card").length;
	for (let step = 0; step <= numero; step++) {
		cantidad = $(".cant:eq(" + step + ")").val();
		precio = $(".precio:eq(" + step + ")").val();

		total = precio * cantidad;
		$(".total:eq(" + step + ")").val("$" + total);
	}
});

function pregunta(event) {
	event.preventDefault();
	// Crea una alerta de confirmación con SweetAlert2
	Swal.fire({
		title: 'Se actualizara el estado de esta entrega ¿estas seguro?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar'
	}).then((result) => {
		// Si el usuario hace clic en "Aceptar", envía el formulario
		if (result.isConfirmed) {
			Swal.fire(
				'Actualizado!',
				'El estado de la Entrega ha sido actualizado, revisa en "EN CAMINO"',
				'success').then((result2) => {
					if (result2.isConfirmed) {
						document.getElementById('en').submit();
					}
				})
		} else {
			// Si el usuario hace clic en "Cancelar", muestra un mensaje
			Swal.fire('Cancelado', '', 'info');
		}
	});
}