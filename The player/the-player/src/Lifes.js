class Lifes {
    constructor() {
        this.playerLives = 5;
    }

    showLife() {
        let lifesCount = document.getElementById('lifes-counter')
        lifesCount.innerText = "Remaining lifes: " + this.playerLives
        lifesCount.appendChild(document.body)
    }

    changeNumberOfLifes() {
        this.playerLives = this.playerLives - 1;

        if (this.playerLives === 0) {
            clearInterval(this.gameIntervalId);
            alert('Game Over, better luck next time')
        }
        this.showLife()
    }
}

export default Lifes;