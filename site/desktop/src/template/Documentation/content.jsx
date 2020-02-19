import React from 'react';
import Markdown from '../../../../../libs/markdown/index'
import './content.less';

const mdData = {};


export default class Content extends React.Component {
  state = {
    mdstr: ''
  }

  constructor(props) {
    super(props);
    this.importMd();
  }


  importMd = () => {
    
    import('../../../../pages').then(pages => {

      pages.default.forEach(_key => {
        _key.doc && _key.doc.then(data =>{
          mdData[`mdstr${_key.hash}`] = data;
          this.checkHashChange();
        })
      });
      
    })

  }

  checkHashChange = () => {
    const hashVal = window.location.hash;
    this.setState({ mdstr: mdData[`mdstr${hashVal.replace(/#\/Documentation-/g, '')}`]})
  }

  render() {
    return (
      <div className="ost-content">
        <div className="ost-content-inside">
          <Markdown mdstr={this.state.mdstr && this.state.mdstr.replace(/:::\s?\$demo\s*|:::\$\s*/g, '')} />
        </div>
      </div>
    );
  }
}