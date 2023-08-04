document.addEventListener('DOMContentLoaded', function() {
    const emojiCodes = ['😄', '✋', '🪨', '✂️'];
    const emojiColors = ['#ffcc00', '#66ccff', '#a3c933', '#ff99cc'];
    const logoContainer = document.querySelector('.logo');
    const radius = 230;
    const offset = 300;
    const emojiSize = 80; 

    const { width, height } = logoContainer.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    
    document.documentElement.style.setProperty('--centerX', centerX + 'px');
    document.documentElement.style.setProperty('--centerY', centerY + 'px');

    for (let i = 0; i < emojiCodes.length; i++) {
        const angle = (i / emojiCodes.length) * Math.PI * 2;

        const x = centerX + (radius + offset) * Math.cos(angle) - emojiSize / 2;
        const y = centerY + (radius + offset) * Math.sin(angle) - emojiSize / 2;


        const emoji = document.createElement('span');
        emoji.innerHTML = emojiCodes[i];
        emoji.style.color = emojiColors[i];
        emoji.style.position = 'absolute';
        emoji.style.left = `calc(var(--centerX) + ${radius * Math.cos(angle)}px - ${emojiSize / 2}px)`;
        emoji.style.top = `calc(var(--centerY) + ${radius * Math.sin(angle)}px - ${emojiSize / 2}px)`;
        emoji.style.fontSize = emojiSize + 'px';
        emoji.style.transform = 'translate(-190%, -10%)';
        emoji.classList.add('emoji'); 
        logoContainer.appendChild(emoji);
    }
});
