window.addEventListener('load', () => {
    const favicon = document.getElementById('favicon');
    const ballImages = ['images/s24-abdullah.png', 'images/s24-adrian.png', 'images/s24-alex.png', 'images/s24-andy.png', 'images/s24-cindy.png', 'images/s24-eileen.png', 'images/s24-engels.png', 'images/s24-fiona.png', 'images/s24-jahmari.png', 'images/s24-linqing.png', 'images/s24-mekhi-m.png', 'images/s24-noah.png', 'images/s24-pat.png', 'images/s24-rashell.png']; // Add the paths of your 14 images


    const getRandomImageUrl = () => {
        const randomIndex = Math.floor(Math.random() * ballImages.length);
        return ballImages[randomIndex];
    };

    favicon.href = getRandomImageUrl();
});
document.getElementById('startButton').addEventListener('click', () => {
    const container = document.getElementById('container');

    const ballImages = ['images/s24-abdullah.png', 'images/s24-adrian.png', 'images/s24-alex.png', 'images/s24-andy.png', 'images/s24-cindy.png', 'images/s24-eileen.png', 'images/s24-engels.png', 'images/s24-fiona.png', 'images/s24-jahmari.png', 'images/s24-linqing.png', 'images/s24-mekhi-m.png', 'images/s24-noah.png', 'images/s24-pat.png', 'images/s24-rashell.png']; // Add the paths of your 14 images

    const randomIndex = () => Math.floor(Math.random() * ballImages.length);

    const createBall = () => {
        const ball = document.createElement('img');
        ball.src = ballImages[randomIndex()];
        ball.classList.add('ball');
        container.appendChild(ball);

        const containerRect = container.getBoundingClientRect();

        let x = Math.random() * (containerRect.width - ball.offsetWidth);
        let y = Math.random() * (containerRect.height - ball.offsetHeight);
        let dx = 2;
        let dy = 2;

        const moveBall = () => {
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';

            x += dx;
            y += dy;

            if (x <= 0 || x >= containerRect.width - ball.offsetWidth) {
                dx *= -1;
            }
            if (y <= 0 || y >= containerRect.height - ball.offsetHeight) {
                dy *= -1;
            }

            requestAnimationFrame(moveBall);
        };

        moveBall();
    };

    // Create 10 balls
    for (let i = 0; i < 10; i++) {
        createBall();
    }
});