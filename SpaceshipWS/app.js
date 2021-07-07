class Spaceship {

    constructor() {
      this.active = false;
    }
  
    getrandomSpaceship() {
      const spaceshipList = ["red-spaceship.png", "green-spaceship.png", "blue-spaceship.png"];
      const randomChoiceIndex = Math.floor(Math.random() * 3);
      return spaceshipList[randomChoiceIndex];
    }
  
    createSpaceshipElement() {
      const imgEl = document.createElement('img');
      imgEl.src = this.getrandomSpaceship()
  
      imgEl.style.width = "75px";
      imgEl.style.display = "block";
      imgEl.style.marginTop = "10px";
  
      return imgEl;
    }
  
    show() {
      this.spaceshipElement = this.createSpaceshipElement();
      this.spaceshipElement.style.position = "relative";
      this.spaceshipElement.style.left = "0px"
      this.spaceshipElement.style.top = "0px"
  
      document.body.append(this.spaceshipElement);
  
      this.registerClickEvent();
    }
  
    registerClickEvent() {
      this.spaceshipElement.addEventListener('click', () => {
        this.active = !this.active;
        this.spaceshipElement.style.background = this.active ? "red" : "white"
      });
    }
  
    moveRight() {
      if (this.active) {
        const left = parseInt(this.spaceshipElement.style.left, 10);
        this.spaceshipElement.style.left = left + 10 + "px"
      }
    }
  
    moveLeft() {
      if (this.active) {
        const left = parseInt(this.spaceshipElement.style.left, 10);
        this.spaceshipElement.style.left = left - 10 + "px"
      }
    }
  
    moveDown() {
      if (this.active) {
        const top = parseInt(this.spaceshipElement.style.top, 10);
        this.spaceshipElement.style.top = top + 10 + "px"
      }
    }
  
    moveUp() {
      if (this.active) {
        const top = parseInt(this.spaceshipElement.style.top, 10);
        this.spaceshipElement.style.top = top - 10 + "px"
      }
    }
  }
  
  const spaceship1 = new Spaceship();
  const spaceship2 = new Spaceship();
  const spaceship3 = new Spaceship();
  
  spaceship1.show();
  spaceship2.show();
  spaceship3.show();
  
  const spaceshipList = [spaceship1, spaceship2, spaceship3]
  //const activeShip = spaceship1;
  
  const btngenerateSpaceship = document.getElementById('generate-spaceship');
  btngenerateSpaceship.addEventListener('click', function () {
    const spaceship = new Spaceship();
    spaceshipList.push(spaceship);
    spaceship.show(document.body);
  });
  
  document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowRight") {
      spaceshipList.forEach((spaceship) => spaceship.moveRight());
    } else if (event.key === "ArrowDown") {
      spaceshipList.forEach((spaceship) => spaceship.moveDown());
    } else if (event.key === "ArrowLeft") {
      spaceshipList.forEach((spaceship) => spaceship.moveLeft());
    } else if (event.key === "ArrowUp") {
      spaceshipList.forEach((spaceship) => spaceship.moveUp());
    }
  });
  
  
  
  
  