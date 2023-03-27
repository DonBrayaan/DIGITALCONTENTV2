$(document).ready(function() {

	$('.ir-arriba').click(function() {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

function pregunta(event) {
	event.preventDefault();
	// Crea una alerta de confirmación con SweetAlert2
	Swal.fire({
		title: 'Se actualizarán los permisos a este usuario ¿¡ESTAS SEGURO!?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar'
	}).then((result) => {
		// Si el usuario hace clic en "Aceptar", envía el formulario
		if (result.isConfirmed) {
			Swal.fire(
				'Correcto!',
				'Los permisos de este usuario han sido modificados.',
				'warning').then((result2) => {
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