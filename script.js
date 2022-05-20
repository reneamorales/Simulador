//Eventos

$('#agregar-producto').click(agregarProducto);

$('#form-cantidad').keypress(mostrarMensaje);


//Funciones

function mostrarMensaje(tecla) {
    if (tecla.which == 13) {
        agregarProducto();
    }
}

function agregarProducto() {

    var producto = document.getElementById("form-producto");
    var valor = document.getElementById("form-valor");
    var cantidad = document.getElementById("form-cantidad");

    var datos = document.getElementById("tabla-productos");

    datos.classList.add("intercalado");

    console.log(producto.value);

    var subtotal = Number(valor.value) * Number(cantidad.value);
    datos.innerHTML = datos.innerHTML + "<tr><td>" + producto.value + "</td><td>" + valor.value + "</td><td>" + cantidad.value + "</td><td name='subtotal'>" + subtotal + "</td><td><button id=eliminar onclick='eliminarProducto(this)'>Quitar</button></td></tr>";



    calcularTotal();
}

function calcularTotal() {

    var subtotales = document.getElementsByName('subtotal');
    var total = document.getElementById('total');

    var suma = 0;

    for (var i = 0; i < subtotales.length; i++) {
        suma = suma + Number(subtotales[i].innerText);

    }
    total.innerText = "$" + suma;
    console.log(suma);
}

function eliminarProducto(producto) {

    producto.parentElement.parentElement.remove();
    calcularTotal();
}