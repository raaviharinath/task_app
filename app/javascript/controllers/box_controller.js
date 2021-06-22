import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["box"];
  static values = {
    color: String,
  };
  static classes = ["blue", "red"];
  connect() {
    console.log("connected box");
  }
  colorValueChanged() {
    console.log("color changed");
    // console.log(this.colorValue);
    // console.log(this.blueClass);
    if (this.colorValue == "blue") {
      this.boxTarget.classList.add(this.blueClass);
      this.boxTarget.classList.remove(this.redClass);
    } else if (this.colorValue == "red") {
      this.boxTarget.classList.add(this.redClass);
      this.boxTarget.classList.remove(this.blueClass);
    }
  }
}
