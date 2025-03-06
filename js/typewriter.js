document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.querySelector('.context-text');
    const originalText = textContainer.textContent.trim();
    textContainer.textContent = '';
    
    // Créer un span pour chaque lettre avec opacity 0
    const letters = originalText.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.transition = 'opacity 0.5s ease';
        return span;
    });
    
    // Ajouter tous les spans au conteneur
    letters.forEach(span => textContainer.appendChild(span));
    
    // Fonction pour faire apparaître chaque lettre
    function revealLetter(index) {
        if (index < letters.length) {
            letters[index].style.opacity = '1';
            setTimeout(() => revealLetter(index + 1), 10);
        }
    }
    
    // Démarrer l'animation après un délai
    setTimeout(() => revealLetter(0), 1000);
}); 