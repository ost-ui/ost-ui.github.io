import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { transform } from 'babel-standalone'
import './index.less';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // console.log('phone location===>', window.location.href);
    // console.log('phone history.length===>', window.history.length);
    // console.log('phone hash===>', window.location.hash);
    this.state = { styleStr: '' };
    this.importMd();
  }

  importMd = () => {

    import(`../../../../../components`).then(Module =>{

      Object.keys(Module).forEach(_key => {

        if (/MENU_ITEM*./ig.test(_key)) return;

        import(`../../../../../components/${_key}/demo/README.md`)
        .then(md =>  md.default)
        .then(data => this.kitchenMd(data, _key, Module));
      });
    });

  }

  getStyleStr = data => {
    const demoStyleRex = /<style>[^]+?<\/style>/g;
    const demoStyleFlagRex = /<style>|<\/style>/g;

    if (!data.match(demoStyleRex)) return;

    let _styleStr = '';

    data.match(demoStyleRex).forEach((ele, i) => {
      _styleStr += ele.replace(demoStyleFlagRex, '');
    })

    this.setState({styleStr: _styleStr});
  }

  kitchenMd = (data, key, Module) => {
    if (window.location.hash.substring(2)!==key) return;
    const demoRex = /:::\s?\$demo\s?([^]+?):::\$/g;
    const demoFlagRex = /:::\s?\$demo|:::\$/g;

    if (!data.match(demoRex)) return;

    this.getStyleStr(data); //渲染样式

    let _componentStr = '';
    let _domStr = '';

    data.match(demoRex).forEach((ele, i) => {
      const _demo = ele.replace(demoFlagRex, '');

      if (/extends\s+React\.Component|extends\s+Component/.test(_demo)) {

          const className = _demo.match(/(class)\s+(.*)\s+(extends)/)[2];

          _componentStr  += _demo.replace(className, `${className}Cpt${i}`);
          _domStr += `<${className}Cpt${i} />`;

//           const rexCpt = new RegExp(`<\\s*${className}Cpt${i}\\s+`, 'g');

//           if (rexCpt.test(_componentStr)) {
//             throw new Error(
//               `can\`t use component self, please check you readme demo '${key}'`
//             );
//           }

      } else {

          const cptStr =  `class Cpt${i} extends React.Component {
                ${_demo}
          }`

          _componentStr  += cptStr;
          _domStr += `<Cpt${i}/>`;
      }
    })

    const args = ['context', 'React', 'ReactDOM', 'Component'];
    const argv = [this, React, ReactDOM, Component];
    
    for (const _key in Module) {
        args.push(_key);
        argv.push(Module[_key]);
    }

    const code = transform(`
      ${_componentStr}

      class Demo extends React.Component {
          render() {
            return <div> ${_domStr} </div>
          }
      }
    
    ReactDOM.render(<Demo {...context.props} />, document.getElementById('ost-phone-demo'))`, {
        presets: ['es2015', 'react']
    }).code;

    args.push(code);

    new Function(...args).apply(null, argv);
  }

  componentWillUnmount() {
    const dom = document.getElementById('ost-phone-demo');
    const styleDom = document.getElementById('ost-phone-demo-style');
    dom && ReactDOM.unmountComponentAtNode(dom);
    styleDom && ReactDOM.unmountComponentAtNode(styleDom);
  }

  render() {
    const {history} = this.props;
    const {styleStr} = this.state;

    return (
      <div className="ost-component">
        <div className="ost-component-content" id='ost-phone-demo' />
        {styleStr ? <style dangerouslySetInnerHTML={{ __html: styleStr }} id='ost-phone-demo-style' /> : null}
      </div>
    );
  }
}

