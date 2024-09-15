document.addEventListener('DOMContentLoaded', () => {
    const cups = document.querySelectorAll('.cup');
    const shuffleButton = document.getElementById('shuffleButton');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');
    let hiddenCup = null;

    function shuffleCups() {
        hiddenCup = Math.floor(Math.random() * cups.length);
        cups.forEach((cup, index) => {
            cup.classList.remove('open');
            cup.classList.add('hidden');
            cup.addEventListener('click', () => {
                if (index === hiddenCup) {
                    cup.classList.add('open');
                    result.textContent = '¡Correcto! Encontraste el papel.';
                    result.style.color = 'green';
                } else {
                    cup.classList.add('open');
                    result.textContent = '¡Incorrecto! Inténtalo de nuevo.';
                    result.style.color = 'red';
                }
                cups.forEach(cup => cup.removeEventListener('click', () => {})); // Remove click events
            });
        });
        result.textContent = '';
    }

    shuffleButton.addEventListener('click', shuffleCups);
    guessButton.addEventListener('click', () => {
        cups.forEach(cup => cup.classList.remove('hidden'));
        cups.forEach(cup => {
            if (cup.classList.contains('hidden')) {
                cup.classList.add('open');
            }
        });
    });

   
    shuffleCups();
});
