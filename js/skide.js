export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
  }

  onMove() {
    /* moveu */
    this.onMove.addEventListener("mousemove", this.onMove);
  }

  onEnd() {
    this.onMove.removeEventListener("mousemove", this.onMove);
  }

  addSlideEvents() {
    /* adocionando evento quando clicar xom o mouse */
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }
  Int() {
    /* para iniciar */
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
