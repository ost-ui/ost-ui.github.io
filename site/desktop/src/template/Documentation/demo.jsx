import React from 'react';
import './demo.less';

const baseAddress = 'http://localhost:3331/#/';

export default class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { address: baseAddress };
  }

  componentWillMount() {
    const page = window.location.hash.replace(/#\/Documentation-/g, '');
    
    if(/^\$.*$/g.test(page)) return;

    this.setState({address: `${baseAddress}${page}`})
  }

  render() {
    console.log(this.state.address);
    
    return (
      <div className="ost-demo">
        <section className="ost-demo-phone">
        <i/>
        <div className="ost-demo-phone-iframe">
          <iframe
            src={this.state.address}
            framespacing="0"
            marginWidth="0" 
            marginHeight="0"
            frameBorder="0"/>
         </div>
         </section>
      </div>
    );
  }
}
