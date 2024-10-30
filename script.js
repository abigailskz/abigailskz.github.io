// Mostrar la sección de la calculadora al hacer clic en el menú
document.getElementById('nutritionalCalculator').addEventListener('click', function () {
    document.getElementById('calculatorSection').style.display = 'block';
});


// Manejar cálculo de calorías y proteínas
document.getElementById('calorieForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    const bodyType = document.getElementById('bodyType').value;
    const gender = document.getElementById('gender').value;
   
    let pesoIdeal;






    // Cálculo del peso ideal basado en el género
    if (gender === 'hombre') {
        pesoIdeal = (age + 50) * 0.75; // Fórmula simplificada para hombres
    } else {
        pesoIdeal = (age + 45) * 0.65; // Fórmula simplificada para mujeres
    }




    let factorActividad;


    switch (activity) {
        case 'sedentario':
            factorActividad = 1.2;
            break;
        case 'ligero':
            factorActividad = 1.375;
            break;
        case 'moderado':
            factorActividad = 1.55;
            break;
        case 'intenso':
            factorActividad = 1.725;
            break;
        default:
            factorActividad = 1;
    }


    // Fórmula de calorías: Mifflin-St Jeor modificada (versión simple)
    const calorias = Math.round((10 * weight + 6.25 * age - 5) * factorActividad);


    // Cálculo de proteínas recomendadas (2 g de proteína por kg de peso)
    const proteinas = Math.round(weight * 2);


    document.getElementById('result').innerHTML = `
    Tu peso ideal es: ${pesoIdeal.toFixed(2)} kg
        Tu consumo diario recomendado es:
        <br>Calorías: ${calorias} kcal.
        <br>Proteínas: ${proteinas} g.
    `;


    // Recomendaciones basadas en el tipo de cuerpo
    const recommendations = {
        ectomorfo: "Recomendación: Aumenta la ingesta de carbohidratos complejos como arroz, pasta, y panes integrales.",
        mesomorfo: "Recomendación: Mantén un equilibrio entre proteínas magras (pollo, pescado) y carbohidratos moderados.",
        endomorfo: "Recomendación: Prioriza proteínas y verduras, y reduce los carbohidratos simples como pan y azúcar."
    };


    document.getElementById('recommendations').textContent = recommendations[bodyType];
});






document.getElementById('idealForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    const idealAge = document.getElementById('idealAge').value;
    const gender = document.getElementById('gender').value;


    let estaturaIdeal;
    let pesoIdeal;


    if (gender === 'hombre') {
        estaturaIdeal = 50 + (idealAge * 0.5); // Ejemplo de fórmula para estatura ideal
        pesoIdeal = (estaturaIdeal - 100) + ((estaturaIdeal - 150) / 4); // Fórmula de peso ideal
    } else {
        estaturaIdeal = 45.5 + (idealAge * 0.5); // Ejemplo de fórmula para estatura ideal
        pesoIdeal = (estaturaIdeal - 100) + ((estaturaIdeal - 150) / 2.5); // Fórmula de peso ideal
    }


    document.getElementById('idealResult').innerHTML = `
        Estatura Ideal: ${estaturaIdeal.toFixed(2)} cm.
        <br>Peso Ideal: ${pesoIdeal.toFixed(2)} kg.
    `;
});




// Diccionario de comidas y calorías aproximadas
const foodCaloriesDict = {
    "manzana": 0.3,
    "banana": 1.1,
    "pollo": 27,
    "arroz": 2.7,
    "pan": 9,
    "pasta": 5,
    "huevo": 13,
 
};


// Manejar la entrada de alimentos y registrar calorías
let totalCalories = 0;
let foodArray = [];




document.getElementById('calculateCalories').addEventListener('click', function () {
    const foodSelect = document.getElementById('foodSelect').value;
    const foodInput = document.getElementById('foodInput').value.toLowerCase();
    const foodName = document.getElementById('food').value.toLowerCase(); // Convertimos a minúsculas para evitar errores
    const foodCalories = foodCaloriesDict[foodName] || 100; // Si no se encuentra, se asume 100 kcal por defecto


    if (foodName) {
        // Agregar la comida a la lista
        foodArray.push({ food: foodName, calories: foodCalories });


        const foodList = document.getElementById('foodList');
        const foodItem = document.createElement('div');
        foodItem.textContent = `${foodName.charArt(0).toUpperCase() + foodName.slice(1)}: ${foodCalories} kcal`;
        foodList.appendChild(foodItem);


        // Actualizar el total de calorías
        totalCalories += foodCalories;S
        document.getElementById('totalCalories').textContent = `Total de calorías consumidas: ${totalCalories} kcal`;
        document.getElementById('food').value = '';


        // Limpiar el campo de entrada
        document.getElementById('food').value = '';
    }
});


// Navegación entre secciones
document.getElementById('nextToFoodLog').addEventListener('click', function () {
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('foodLogSection').style.display = 'block';
});


document.getElementById('prevToCalculator').addEventListener('click', function () {
    document.getElementById('foodLogSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'block';
});


document.getElementById('nextToIdealCalc').addEventListener('click', function () {
    document.getElementById('foodLogSection').style.display = 'none';
    document.getElementById('idealCalcSection').style.display = 'block';
});


document.getElementById('prevToFoodLog').addEventListener('click', function () {
    document.getElementById('idealCalcSection').style.display = 'none';
    document.getElementById('foodLogSection').style.display = 'block';
});


// Mostrar la sección de Tipos de Cuerpos y navegar entre Ectomorfo, Mesomorfo y Endomorfo
document.getElementById('bodyTypes').addEventListener('click', function () {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('bodyTypesSection').style.display = 'block';
    document.getElementById('ectomorph').style.display = 'block';
});


// Navegación entre los tipos de cuerpo
document.getElementById('nextToMesomorph').addEventListener('click', function () {
    document.getElementById('ectomorph').style.display = 'none';
    document.getElementById('mesomorph').style.display = 'block';
});


document.getElementById('prevToEctomorph').addEventListener('click', function () {
    document.getElementById('mesomorph').style.display = 'none';
    document.getElementById('ectomorph').style.display = 'block';
});


document.getElementById('nextToEndomorph').addEventListener('click', function () {
    document.getElementById('mesomorph').style.display = 'none';
    document.getElementById('endomorph').style.display = 'block';
});


document.getElementById('prevToMesomorph').addEventListener('click', function () {
    document.getElementById('endomorph').style.display = 'none';
    document.getElementById('mesomorph').style.display = 'block';
});
