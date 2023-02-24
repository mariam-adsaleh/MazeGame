document.addEventListener("DOMContentLoaded", function(){
    // Define the maze boundaries
    const boundaries = document.querySelectorAll('.boundary');

    // Define the start and end squares
    const startSquare = document.querySelector('#start');
    const endSquare = document.querySelector('#end');

    // Define the status message and score
    const statusMessage = document.querySelector('#status');
    let score = 0;

    // Add an event listener to the start button
    document.querySelector('#start').addEventListener('click', () => {
        resetMaze();
        score = 0;
        updateScore();
    });

    // Add an event listener to each boundary square
    boundaries.forEach((boundary) => {
        boundary.addEventListener('mouseover', () => {
            boundaries.forEach((boundary) => {
                boundary.style.backgroundColor = '#ff0000';
            });
            statusMessage.textContent = 'You lost';
            score -= 10;
            updateScore();
        });
    });

    // Add an event listener to the end square
    endSquare.addEventListener('mouseover', () => {
        statusMessage.textContent = 'You won';
        score += 5;
        updateScore();
    });

    // Define the resetMaze function
    function resetMaze() {
        boundaries.forEach((boundary) => {
            boundary.style.backgroundColor = '#eeeeee';
        });
        statusMessage.textContent = 'Begin by moving your mouse over the "S".';
    }

    // Define the updateScore function
    function updateScore() {
        document.querySelector('.example').textContent = `Score: ${score}`;
    }
});
