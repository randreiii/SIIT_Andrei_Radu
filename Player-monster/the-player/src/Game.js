import Player from './Player';
import Monster from './Monster';
import Lifes from './Lifes';


class Game {

    static getRandomTopAndLeft() {
        const mapPositions = Game.getMapPositions();
        const randomIndexTop = Math.floor(Math.random() * mapPositions.length)
        const randomIndexLeft = Math.floor(Math.random() * mapPositions.length)
        const top = mapPositions[randomIndexTop];
        const left = mapPositions[randomIndexLeft];

        return {
            top,
            left
        }
    }
    static getMapPositions() {
        let array = [];
        for (let j = 0; j <= 360; j = j + 40) {
            array.push(j);
        }
        return array;
    }

    constructor(map) {
        this.map = map;
        this.player = new Player();
        this.monsterList = []
        this.playerLifes = new Lifes();
        const monsterTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        for (let index = 0; index < monsterTypes.length; index++) {
            this.monsterList.push(new Monster(monsterTypes[index]))
        }
    }

    showAllMonsters() {
        this.monsterList.forEach(monster => {
            const { top, left } = Game.getRandomTopAndLeft();
            monster.show(this.map, top, left);
        })
    }

    registerMovementPlayer() {
        document.addEventListener("keydown", (event) => {

            switch (event.key) {
                case "ArrowUp":
                    this.player.moveUp();
                    break;
                case "ArrowDown":
                    this.player.moveDown()
                    break;
                case "ArrowLeft":
                    this.player.moveLeft()
                    break;
                case "ArrowRight":
                    this.player.moveRight()
                    break;
                default:
            }
        });
    }

    monstersStart() {

        this.gameIntervalId = setInterval(() => {

            this.monsterList.forEach(monster => {
                monster.run();
            });
            if (this.isPlayerIntersectWithMonster()) {
                this.playerLifes.changeNumberOfLifes()
            }
        }, 300)
    }

    isPlayerIntersectWithMonster() {
        const playerCordonates = this.player.getCordonates();
        const monstersCordonates = this.monsterList.map(monster => {
            return monster.getCordonates();
        });

        const isIntersect = monstersCordonates.some(monsterCordonates => {
            if (
                monsterCordonates.top === playerCordonates.top &&
                monsterCordonates.left === playerCordonates.left
            ) {
                return true;
            }
            return false;
        })
        return isIntersect;
    }

    start() {
        this.player.show(this.map);
        this.showAllMonsters();
        this.registerMovementPlayer();
        this.monstersStart()
        this.playerLifes.showLife()
    }
}

export default Game;