import ReactDOM from 'react-dom';
import EnzymeExtend from './__enzyme';

class Factory extends EnzymeExtend {

  static mountComponent(comp) {
    let id = this.id;
    const container = document.createElement('div');
    container.id = `app_${++id}`;
    document.body.appendChild(container);
    ReactDOM.render(container, comp);
  }

  static unmountComponent(comp) {
    this.destroyReactContainerDom(comp);
  }

  static createRoot() {
    const container = document.createElement('div');
    container.id = `app`;
    document.body.appendChild(container);
  }
}

export default new Factory();