const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const scoreText = document.getElementById("score");

let playerX = 150;
let enemyY = -120;
let enemyX = Math.random() * 250 + 20;
let score = 0;
let gameOver = false;

function moveLeft() {
    if (playerX > 15) {
        playerX -= 30;
        player.style.left = playerX + "px";
    }
}

function moveRight() {
    if (playerX < 290) {
        playerX += 30;
        player.style.left = playerX + "px";
    }
}

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft") {
        moveLeft();
    }

    if (event.key === "ArrowRight") {
        moveRight();
    }

});

function gameLoop() {

    if (gameOver) return;

    enemyY += 5;

    enemy.style.top = enemyY + "px";
    enemy.style.left = enemyX + "px";

    if (enemyY > 600) {

        enemyY = -120;
        enemyX = Math.random() * 250 + 20;

        score++;
        scoreText.textContent = "Score: " + score;
    }

    const playerRect = player.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    if (
        playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left &&
        playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top
    ) {

        gameOver = true;

        alert("💥 GAME OVER!\nScore: " + score);

        location.reload();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
