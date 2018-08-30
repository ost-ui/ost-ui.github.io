import ReactDOM from 'react-dom';
import React from 'react';
import { transform } from 'babel-standalone'
import './index.less';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // console.log('phone location===>', window.location.href);
    // console.log('phone history.length===>', window.history.length);
    // console.log('phone hash===>', window.location.hash);
    this.importMd();
  }

  importMd = () => {

    import(`../../../../../components`).then(Module =>{
      Object.keys(Module).forEach(_key => {
        import(`../../../../../components/${_key}/demo/README.md`).then(md =>  md.default).then(data => this.kitchenMd(data, _key, Module));
      });
    });

  }

  kitchenMd = (data, key, Module) => {
    if (window.location.hash.substring(2)!==key) return;
    const demoRex = /:::\s?\$demo\s?([^]+?):::\$/g;
    const demoFlagRex = /:::\s?\$demo|:::\$/g;

    if (!data.match(demoRex)) return;

    let _htmlStr = '';

    data.match(demoRex).forEach(ele => {
      const _demo = ele.replace(demoFlagRex, '');
      _htmlStr += _demo;
    })

    const args = ['context', 'React', 'ReactDOM'];
    const argv = [this, React, ReactDOM];
    
    for (const _key in Module) {
        args.push(_key);
        argv.push(Module[_key]);
    }

    const code = transform(`
    class Demo extends React.Component {
          ${_htmlStr}
    }

    ReactDOM.render(<Demo {...context.props} />, document.getElementById('ost-phone-demo'))`, {
        presets: ['es2015', 'react']
    }).code;

    args.push(code);

    new Function(...args).apply(null, argv);
  }

  componentWillUnmount() {
    const dom = document.getElementById('ost-phone-demo');
    ReactDOM.unmountComponentAtNode(dom);
  }

  render() {
    const {history} = this.props;

    return (
      <div className="ost-component">
        <div className="ost-component-content" id='ost-phone-demo' />
      </div>
    );
  }
}

