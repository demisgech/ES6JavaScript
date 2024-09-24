export class Widget {
  #enabled;
  constructor(enable) {
    this.#enabled = enable;
    console.log("Widget constructed!");
  }

  enable() {
    this.#enabled = true;
  }

  disable() {
    this.#enabled = false;
  }

  isEnabled() {
    return this.#enabled;
  }

  draw() {
    console.log("Drawing a widget ...");
  }
}
