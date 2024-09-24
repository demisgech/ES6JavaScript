import { Widget } from "./Widget.js";
import TextBox from "./TextBox.js";
const widget = new Widget(true);
widget.disable();
console.log(widget.isEnabled());

widget.enable();
console.log(widget.isEnabled());

const textBox = new TextBox("value", true);
textBox.disable();
console.log(textBox.isEnabled());

textBox.enable();
console.log(textBox.isEnabled());

widget.draw();
textBox.draw();
