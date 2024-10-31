// Mostrar la sección de la calculadora al hacer clic en el menú
document.getElementById('showCalculator').addEventListener('click', function () {
    document.getElementById('calculatorSection').style.display = 'block';
});


// Manejar cálculo de calorías y proteínas
document.getElementById('calorieForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    const bodyType = document.getElementById('bodyType').value;


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


// Nueva función para calcular estatura y peso ideal
document.getElementById('idealForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    const idealAge = document.getElementById('idealAge').value;
    const gender = document.getElementById('gender').value;


    let estaturaIdeal;
    let pesoIdeal;


    // Fórmula simple para calcular la estatura y peso ideal
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
    "manzana": 52,
    "banana": 89,
    "pollo": 165,
    "arroz": 130,
    "pan": 265,
    "pasta": 131,
    "huevo": 78,
    "ensalada": 33
};


// Manejar la entrada de alimentos
let totalCalories = 0;
let foodArray = [];


document.getElementById('calculateCalories').addEventListener('click', function () {
    const foodSelect = document.getElementById('foodSelect').value;
    const foodInput = document.getElementById('foodInput').value.toLowerCase();
    const foodName = foodSelect || foodInput;


    const foodCalories = foodCaloriesDict[foodName] || 100;
   
    if (foodName) {
        // Agregar la comida a la lista
        foodArray.push({ food: foodName, calories: foodCalories });


        const foodList = document.getElementById('foodList');
        const foodItem = document.createElement('div');
        foodItem.textContent = `${foodName.charAt(0).toUpperCase() + foodName.slice(1)}: ${foodCalories} kcal`;
        foodList.appendChild(foodItem);


        // Actualizar el total de calorías
        totalCalories += foodCalories;
        document.getElementById('totalCalories').textContent = `Total de calorías consumidas: ${totalCalories} kcal`;


        // Limpiar el campo de entrada
        document.getElementById('foodInput').value = '';
        document.getElementById('foodSelect').value = '';
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


// Mostrar la sección de Tipos de Cuerpos y la primera página (Mesomorfo)
document.getElementById('bodyTypes').addEventListener('click', function () {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('bodyTypesSection').style.display = 'block';
    document.getElementById('mesomorph').style.display = 'block';
    document.getElementById('ectomorph').style.display = 'none';
    document.getElementById('endomorph').style.display = 'none';
});


// Navegación entre los tipos de cuerpo
document.getElementById('nextToEctomorph').addEventListener('click', function () {
    document.getElementById('mesomorph').style.display = 'none';
    document.getElementById('ectomorph').style.display = 'block';
});


document.getElementById('prevToMesomorph').addEventListener('click', function () {
    document.getElementById('ectomorph').style.display = 'none';
    document.getElementById('mesomorph').style.display = 'block';
});


document.getElementById('nextToEndomorph').addEventListener('click', function () {
    document.getElementById('ectomorph').style.display = 'none';
    document.getElementById('endomorph').style.display = 'block';
});


document.getElementById('prevToEctomorph').addEventListener('click', function () {
    document.getElementById('endomorph').style.display = 'none';
    document.getElementById('ectomorph').style.display = 'block';
});


// Mostrar la sección de Recordatorio Energético al hacer clic en el menú
document.getElementById('energyReminder').addEventListener('click', function () {
    document.getElementById('energyReminderSection').style.display = 'block';
    document.getElementById('main-content').querySelectorAll('.section').forEach(section => {
        if (section !== document.getElementById('energyReminderSection')) {
            section.style.display = 'none';
        }
    });
});


// Manejar la configuración del recordatorio energético
document.getElementById('reminderForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const drinkType = document.getElementById('drinkType').value;
    const reminderInterval = document.getElementById('reminderInterval').value;


    // Mostrar el mensaje de recordatorio
    const reminderMessage = `Recordatorio configurado: Beber ${drinkType} cada ${reminderInterval} horas.`;
    document.getElementById('reminderMessage').textContent = reminderMessage;


    // Aquí podrías agregar lógica para configurar recordatorios más avanzados,
    // como enviar notificaciones, si decides implementar eso más adelante.
});


// Mostrar la sección de créditos al hacer clic en el menú
document.getElementById('credits').addEventListener('click', function () {
    // Ocultar todas las secciones
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('foodLogSection').style.display = 'none';
    document.getElementById('idealCalcSection').style.display = 'none';
    document.getElementById('bodyTypesSection').style.display = 'none';
    document.getElementById('energyReminderSection').style.display = 'none';
   
    // Mostrar la sección de créditos
    document.getElementById('creditsSection').style.display = 'block';
});


// Volver al menú desde la sección de créditos
document.getElementById('prevToMenu').addEventListener('click', function () {
    // Ocultar la sección de créditos
    document.getElementById('creditsSection').style.display = 'none';
   
    // Mostrar la sección del menú principal (ajusta según tu diseño)
    document.getElementById('main-content').style.display = 'block'; // Si quieres volver al contenido principal
});


// Mostrar la sección de configuración al hacer clic en el menú
document.getElementById('settings').addEventListener('click', function () {
    document.getElementById('settingsSection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
    document.getElementById('foodLogSection').style.display = 'none';
    document.getElementById('idealCalcSection').style.display = 'none';
    document.getElementById('bodyTypesSection').style.display = 'none';
    document.getElementById('energyReminderSection').style.display = 'none';
    document.getElementById('creditsSection').style.display = 'none';
});


// Guardar configuración
document.getElementById('saveSettings').addEventListener('click', function () {
    const darkMode = document.getElementById('darkModeToggle').checked;
    const notifications = document.getElementById('notificationToggle').checked;


    // Guardar configuración en el almacenamiento local
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('notifications', notifications);


    // Aplicar modo oscuro si está activado
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }


    alert('Configuración guardada!');
});


// Cargar configuración al iniciar la aplicación
window.onload = function () {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const notifications = localStorage.getItem('notifications') === 'true';


    document.getElementById('darkModeToggle').checked = darkMode;
    document.getElementById('notificationToggle').checked = notifications;


    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
};
