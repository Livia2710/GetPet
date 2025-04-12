// JavaScript
function dispararConfetes() {
    // Configuração base
    const config = {
      particleCount: 150,
      startVelocity: 30,
      spread: 150,
      scalar: 1 // Confetes maiores
    };
  
    // Lateral esquerda
    confetti({
      ...config,
      origin: { x: 0, y: 0.5 }
    });
  
    // Lateral direita
    confetti({
      ...config,
      origin: { x: 1, y: 0.5 }
    });
  }