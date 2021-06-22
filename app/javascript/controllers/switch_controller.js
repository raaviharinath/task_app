
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["color", "switch"];
  connect() {
    console.log("connected switch");
  }

  toggle() {
    console.log("toggling switch");
    //console.log(this.colorTarget.value);
    let newColor = this.colorTarget.value == "blue" ? "red" : "blue";
    //console.log(newColor);
    this.colorTarget.value = newColor;
    this.element.dataset.boxColorValue = newColor;
    if (newColor == "red") {
      this.switchTarget.innerHTML = "Change me back to Blue";
    } else {
      this.switchTarget.innerHTML = "Click me";
    }
  }
}
