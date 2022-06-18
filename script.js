//Prevencion del efecto enviar

const form = document.querySelector('#formulario');

const enviarFormulario = (event) => {
    event.preventDefault();


    const {
        infoValor,
        infoCantidad
    } = event.target


    //Validacion

    if (infoValor.value.length === 0 || infoCantidad.value.length === 0) {
        mostrarMensaje()

    } else {
        agregarProducto()
    }

    function mostrarMensaje() {

        $('.msj-obli').css('display', 'block');
        $('.obligatorio').css('color', 'red');
    }

};

form.addEventListener('submit', enviarFormulario);

//Eventos

$('#form-cantidad').keypress(envioEnter);


//Funciones

function envioEnter(tecla) {
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


    var subtotal = Number(valor.value) * Number(cantidad.value);
    datos.innerHTML = datos.innerHTML + "<tr><td>" + cantidad.value + "</td><td>" + producto.value + "</td><td>" + valor.value + "</td><td name='subtotal'>" + subtotal + "</td><td><button id=eliminar onclick='eliminarProducto(this)'>Quitar</button></td></tr>";



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

}

function eliminarProducto(producto) {

    producto.parentElement.parentElement.remove();
    calcularTotal();
}
