document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

//Con la siguiente función conseguimos que al hacer click sobre el botón al que le hemos asignado anteriormente el id "calculate"
//se realicen las operaciones consiguientes, en este caso le pasamos los parámetros de "length" y "width" y al pasar por el if nos
//mostrará el resultado correspondiente.
calculateButton.addEventListener("click", () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
//Lo que hará el siguiente if es que si le pasamos los valores de "length" y "width" nos hará las operaciones que le indiquemos,
//y si no introducimos uno de los dos parametros, o ninguno de ellos, nos saltará el mensaje especificado en el else.
    if ( !isNaN(length) && !isNaN(width)){
        const perimetro = 2 * length + width;
        const area = length * width;
        const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))

//Lo que conseguimos con la siguiente función será mostrar bajo el botón de calcular los resultados de las operaciones que hemos
//especifado anteriormente como constantes, saliendo los resultados con el correspondiente texto indicado más el resultado
//de estas operaciones.
        resultContainer.innerHTML = `
            <p>El perímetro del rectángulo es: ${perimetro}</p>
            <p>El área del rectángulo es: ${area}</p>
            <p>La diagonal del rectángulo es: ${diagonal}</p>
            
   ` }
//Si no introducimos valores, o introducimos unos erroneos, saldrá el siguiente mensaje diciendo que ingreses unos válidos.
    else {
        resultContainer.innerHTML = `Por favor, ingrese valores válidos.`;
    }
})
})