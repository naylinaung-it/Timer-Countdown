import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="welcome"
export default class extends Controller {
  static targets = ["name","greeting"]
  connect() {
  }

  greet(){
    this.greetingTarget.textContent = `hello, ${this.name}`;
  }
  get name(){
    return this.nameTarget.value;
  }
}
