document.addEventListener('DOMContentLoaded', () => {
    // Vignette fade out
    const vignette = document.getElementById('vignette-overlay');
    if (vignette) {
        setTimeout(() => {
            vignette.classList.remove('vignette-active');
        }, 100);
    }

    // Message Content - EDIT HERE
    const messageText = "Não tenho palavras para expressar o quanto você significa para mim. O caminho que nossa amizade trilhou é repleto de momentos inesquecíveis, risadas compartilhadas e apoio incondicional. Você é uma pessoa incrível, sua presença ilumina a vida daqueles ao seu redor. Que este dia especial seja apenas o começo de um novo ciclo, ciclo esse cheio de felicidade, sucesso e realizações.";
    
    const typingElement = document.getElementById('typing-text');
    const typingSpeed = 35; // ms per character

    let charIndex = 0;

    function typeWriter() {
        if (charIndex < messageText.length) {
            // Handle line breaks if you use \n in the string, though innerHTML handles <br> better.
            // For simple text:
            typingElement.textContent += messageText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Message complete
            // Trigger confetti if available
            if (typeof startConfetti === 'function') {
                // Configure confetti for a nice burst
                const duration = 3000;
                const end = Date.now() + duration;

                (function frame() {
                    // launch a few confetti from the left edge
                    confetti({
                        particleCount: 7,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 }
                    });
                    // and launch a few from the right edge
                    confetti({
                        particleCount: 7,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 }
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
            }
        }
    }

    // Start typing after a small delay to allow transition to finish
    if (typingElement) {
        setTimeout(typeWriter, 1000);
    }
});
