import MoveHtmlElement from "./MoveHtmlElement";

class Player extends MoveHtmlElement {
  static create() {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    playerDiv.style.top = "200px";
    playerDiv.style.left = "0px";

    playerDiv.style.backgroundColor= "black"
    playerDiv.style.width = "40px";
    playerDiv.style.height = "40px";

    return playerDiv;

  }

  constructor() {
    super(40, Player.create())
    
  }

  show(map) {
    map.append(this.htmlElement)
  }
}

export default Player;