// --- Логіка для Проекту 1: Чарівна кнопка ---

// Знаходимо потрібні елементи в HTML
const magicButton = document.getElementById('magic-button');
const predictionDisplay = document.getElementById('prediction-display');

// Створюємо масив (список) з можливими відповідями
const predictions = [
    "Так, однозначно!",
    "Зірки кажуть 'так'.",
    "Без сумніву.",
    "Спробуй ще раз пізніше.",
    "Краще не казати тобі зараз.",
    "Мої джерела кажуть 'ні'.",
    "Дуже сумнівно.",
    "Сконцентруйся і запитай знову."
];

// Вішаємо "слухача" на кнопку, який чекає на клік
magicButton.addEventListener('click', function() {
    // 1. Генеруємо випадкове число від 0 до довжини нашого масиву
    const randomIndex = Math.floor(Math.random() * predictions.length);

    // 2. Отримуємо випадкову фразу з масиву за цим числом
    const randomPrediction = predictions[randomIndex];

    // 3. Відображаємо цю фразу на сторінці
    predictionDisplay.textContent = randomPrediction;
});


// --- Логіка для Проекту 2: Перемикач світла ---

// Знаходимо кнопку-перемикач
const lightSwitch = document.getElementById('light-switch');

lightSwitch.addEventListener('click', function() {
    // document.body - це спосіб отримати доступ до тегу <body>
    // classList.toggle('dark-mode') - це магічна команда:
    // якщо класу 'dark-mode' немає - вона його додає.
    // якщо він є - вона його прибирає.
    document.body.classList.toggle('dark-mode');
});


// --- Логіка для Проекту 3: Інтерактивний кіт ---

// Знаходимо зображення кота та аудіофайл
const catImage = document.getElementById('cat-image');
const meowSound = document.getElementById('meow-sound');

catImage.addEventListener('click', function() {
    // Відтворюємо звук
    meowSound.play();
});