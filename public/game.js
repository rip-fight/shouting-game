// game.js

// Game state
let player1 = { x: 100, y: 100, health: 100, isShooting: false };
let player2 = { x: 400, y: 400, health: 100, isShooting: false };

// Movement speed
const speed = 5;

// Update player position
function movePlayer(player, direction) {
    switch (direction) {
        case 'up':
            player.y -= speed;
            break;
        case 'down':
            player.y += speed;
            break;
        case 'left':
            player.x -= speed;
            break;
        case 'right':
            player.x += speed;
            break;
    }
}

// Shooting logic
function shoot(player) {
    if (player.isShooting) {
        // Logic for shooting
        let bullet = { x: player.x, y: player.y };
        // Add bullet logic (e.g., movement, collision detection)
    }
}

// Health management
function damagePlayer(player, amount) {
    player.health -= amount;
    if (player.health <= 0) {
        console.log(`Player at (${player.x}, ${player.y}) has been defeated!`);
    }
}

// Collision detection
function checkCollision(playerA, playerB) {
    return Math.abs(playerA.x - playerB.x) < 50 && Math.abs(playerA.y - playerB.y) < 50;
}

// Main game loop
function gameLoop() {
    // Update movements and shooting
    movePlayer(player1, 'up'); // For example
    shoot(player1);

    // Check collision
    if (checkCollision(player1, player2)) {
        damagePlayer(player2, 10); // Damage player2 if they collide
    }

    // Continue the loop
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();