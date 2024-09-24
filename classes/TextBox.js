import { Widget } from "./Widget.js";

export default class TextBox extends Widget {
  #value;
  constructor(value, enable) {
    super(enable);
    this.#value = value;
    console.log("TexBox constructed!");
  }

  setValue(value) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  draw() {
    console.log("Drawing a TextBox ...");
  }
}
