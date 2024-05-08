import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="welcome"
export default class extends Controller {
  static targets = ["name","greeting", "yourName", "getDatetime"]
  connect() {
  }

  greet(){
    this.greetingTarget.textContent = `hello, ${this.name}`;
    this.getDatetimeTarget.textContent = Date();
  }
  get name(){
    return this.nameTarget.value;
  }

  alert_testing(){
    alert(`Hello ${this.yourname}, Thanks for Button clicked!`);
    this.yourNameTarget.value = "";
  }

  get yourname(){
    return this.yourNameTarget.value;
  }
}
