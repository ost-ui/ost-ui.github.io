export default class EnzymeExtend {
  constructor() {
    this.container = null;
  }

  destroyReactContainerDom(comp) {
    this.reactContainerDom(comp);
    container.parentNode.removeChild(this.container);
  }

  createContainerDom(comp) {
    this.container = componetWrapper[Symbol.for('enzyme.__node__')].rendered.instance.container;
  }

  get reactContainerDom() {
    return this.container;
  }
}