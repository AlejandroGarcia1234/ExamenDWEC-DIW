document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const resultContainer = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    if ( !isNaN(length) && !isNaN(width)){
        const perimetro = 2 * length + width;
        const area = length * width;
        const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))

        resultContainer.innerHTML = `
            <p>El perímetro del rectángulo es: ${perimetro}</p>
            <p>El área del rectángulo es: ${area}</p>
            <p>La diagonal del rectángulo es: ${diagonal}</p>
            
   ` }
    else {
        resultContainer.innerHTML = `Por favor, ingrese valores válidos.`;
    }
})
})