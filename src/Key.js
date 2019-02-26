export default class Key {
  Init(keyCode) {
    this.right = false
    this.left = false
    this.up = false
    this.down = false
  }
  static setPressedState (keyCode) {
    if (keyCode === RIGHT_ARROW) {
      this.right = true
    }
    if (keyCode === LEFT_ARROW) {
      this.left = true
    }
    if (keyCode === UP_ARROW) {
      this.up = true
    }
    if (keyCode === DOWN_ARROW) {
      this.down = true
    }
  }
  static isRightPressed () {
    return this.right
  }
  static isLeftPressed () {
    return this.left
  }
  static isUpPressed () {
    return this.up
  }
  static isDownPressed () {
    return this.down
  }
}