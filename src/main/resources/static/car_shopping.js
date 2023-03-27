$(document).ready(function() {

	$(".minusButton").on("click", function(evt) {
		evt.preventDefault();
		disminuirCantidad($(this));
	});

	$(".plusButton").on("click", function(evt) {
		evt.preventDefault();
		incrementarCantidad($(this));
	});
	$(".link-remove").on("click", function(evt) {
		evt.preventDefault();
		removeFromCart($(this));
	});
	updateTotal();
});

function removeFromCart(link) {
	url = link.attr("href");

	$.ajax({
		type: "POST",
		url: url,
		beforeSend: function(xhr) {
			xhr.setRequestHeader(crsfHeaderName, crsfValue);
		}
	}).done(function(response) {


		$("#modalTitle").text("Carrito de Compras");
		if (response.includes("El producto ha sido removido del Carrito")) {
			$("#myModal").on("hide.bs.modal", function(e) {
				rowNumber = link.attr("rowNumber")
				removeProduct("rowNumber");
				updateTotal();
			});
		}
		$("#modalBody").text(response);
		$("#myModal").modal();
	}).fail(function() {
		$("#myModal").modal();
		$("#modalTitle").text("Carrito de Compras");
		$("#modalBody").text("Error");
	});
}
function removeProduct(rowNumber) {
	rowId = "row" + rowNumber;
	$("#" + rowId).remove();
}
function disminuirCantidad(link) {
	productId = link.attr("pid");

	cantidadInput = $("#cantidad" + productId);

	newCantidad = parseInt(cantidadInput.val()) - 1;

	if (newCantidad > 0) {
		cantidadInput.val(newCantidad);
		updateCantidad(productId, newCantidad);

	}
}
function incrementarCantidad(link) {
	productId = link.attr("pid");

	cantidadInput = $("#cantidad" + productId);

	newCantidad = parseInt(cantidadInput.val()) + 1;

	if (newCantidad < 10) {
		cantidadInput.val(newCantidad);
		updateCantidad(productId, newCantidad);
	}
}
function updateCantidad(idProducto, cantidad) {
	url = contextPath + "carrito/update/" + idProducto + "/" + cantidad;

	$.ajax({
		type: "POST",
		url: url,
		beforeSend: function(xhr) {
			xhr.setRequestHeader(crsfHeaderName, crsfValue);
		}
	}).done(function(newSubtotal) {
		updateSubtotal(newSubtotal, productId);
		updateTotal();
	}).fail(function() {
		$("#modalTitle").text("Carrito de Compras");
		$("#modalBody").text("Error");
		$("#myModal").modal();
	});

}
function updateSubtotal(newSubtotal, productId) {
	$("#subtotal" + productId).text(newSubtotal);
}
function updateTotal() {

	total = 0.0;

	$(".productSubtotal").each(function(index, element) {
		total = total + parseFloat(element.innerHTML);
	});

	$("#totalEstimado").text("$" + total);
}


function pregunta(event) {
	event.preventDefault();
	// Crea una alerta de confirmación con SweetAlert2
	Swal.fire({
		title: '¿Está seguro de realizar el pedido?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar'
	}).then((result) => {
		// Si el usuario hace clic en "Aceptar", envía el formulario
		if (result.isConfirmed) {
			Swal.fire(
				'Correcto!',
				'Tu pedido se encuentra en Camino, no olvides mantener actulizada tu direccion de residencia.',
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