fetch('divisas.json')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        divisas = data;
        //console.log(divisas);
        const boton = document.getElementById("botonconvertir");
        boton.addEventListener("click", function(event) {
            event.preventDefault();

            const divisaOrigen = document.getElementById('DivisaOrigen').value;
            const cantidad = parseFloat(document.getElementById('Cantidad').value);
            const divisaDestino = document.getElementById('DivisaDestino').value;

            const divisaOrigenEncontrada = divisas.find(divisa => divisa.nombre === divisaOrigen);
            const divisaDestinoEncontrada = divisas.find(divisa => divisa.nombre === divisaDestino);

            if (divisaOrigenEncontrada && divisaOrigenEncontrada.precio !== undefined &&
                divisaDestinoEncontrada && divisaDestinoEncontrada.precio !== undefined) {
                
                const divisaOrigenPrecio = divisaOrigenEncontrada.precio;
                const divisaDestinoPrecio = divisaDestinoEncontrada.precio;

                // conversión por regla de 3 simples
                const resultado = (cantidad * divisaOrigenPrecio) / divisaDestinoPrecio;

                const resultadoElemento = document.getElementById("resultado");
                resultadoElemento.textContent = `Resultado de la conversión: ${resultado} ${divisaDestino}`;
            } else {
                // Manejo de caso en el que la divisa no se encuentra
                console.error('La divisa de origen o destino no fue encontrada o no tiene un precio definido');
            }
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos de divisas:', error);
    });

 //storage no supe como aplicar el local storage en mi pagina, guarde los precios de las divisas en pesos del dia anterior 
 localStorage.setItem("🍌", 500);
 localStorage.setItem("USD$", 1100);
 localStorage.setItem("€", 1600);
 let ayerBanana = localStorage.getItem("🍌");
 let ayerDolar= localStorage.getItem("USD$");
 let ayerEuro= localStorage.getItem("€");
 
 let cotizacionAyer = document.getElementById("precioDeAyer");
 cotizacionAyer.textContent = `Cotización de ayer\n :  🍌 = AR$${ayerBanana}\n , USD$ = AR$${ayerDolar}\n ,  € = AR$${ayerEuro}\n`;
