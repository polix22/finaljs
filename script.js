fetch('divisas.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        divisas = data;
        const boton = document.getElementById("botonconvertir");
        boton.addEventListener("click", function(event) {
            event.preventDefault();
            const divisaOrigen = document.getElementById('DivisaOrigen').value;
            const cantidad = parseFloat(document.getElementById('Cantidad').value);
            const divisaDestino = document.getElementById('DivisaDestino').value;
//verifico que la variable esta definida
            const divisaOrigenEncontrada = divisas.find(divisa => divisa.nombre === divisaOrigen);
            const divisaDestinoEncontrada = divisas.find(divisa => divisa.nombre === divisaDestino);
            
            if (divisaOrigenEncontrada && divisaOrigenEncontrada.precio !== undefined &&
                divisaDestinoEncontrada && divisaDestinoEncontrada.precio !== undefined) {
                
                const divisaOrigenPrecio = divisaOrigenEncontrada.precio;
                const divisaDestinoPrecio = divisaDestinoEncontrada.precio;
 // conversión por regla de 3 simples
                const resultado = (cantidad * divisaOrigenPrecio) / divisaDestinoPrecio;
                const resultadoElemento = document.getElementById("resultado");
//modifico el dom con el resultado y creo un sweetalert mostrando el resultado
                resultadoElemento.textContent = `Resultado de la conversión: ${resultado} ${divisaDestino}`;
                Swal.fire({
                    imageUrl:"./img/bien.jpg",
                    title: `${divisaOrigen}${cantidad}=${divisaDestino}${resultado}`,
                    footer: 'Lionel hutz'
                  });
            } else {
// Manejo de caso en el que la divisa no se encuentra con un sweet alert
                Swal.fire({
                    imageUrl:"./img/mal.jpg",
                    title: "CAMPO VACIO",
                    text: "verifique el monto y las divisas",
                    footer: "Lionel hutz"
                  });
            }
        });
    })
//storage no supe como aplicar el local storage en mi pagina, guarde los precios de las divisas en pesos del dia anterior 
 localStorage.setItem("🍌", 500);
 localStorage.setItem("USD$", 1100);
 localStorage.setItem("€", 1600);
 let ayerBanana = localStorage.getItem("🍌");
 let ayerDolar= localStorage.getItem("USD$");
 let ayerEuro= localStorage.getItem("€");
 
 let cotizacionAyer = document.getElementById("precioDeAyer");
 cotizacionAyer.textContent = `Cotización de ayer\n :  🍌 = AR$${ayerBanana}\n , USD$ = AR$${ayerDolar}\n ,  € = AR$${ayerEuro}\n`;
