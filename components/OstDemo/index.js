import React from 'react';
import request from './request';

class OstDemo extends React.Component {
  state = {
    open: false,
    book: '',
    isLoading: false
  };

  openHandler = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    })
  };

  requestHandler = (params, error) => {
    return request(params, error);
  };

  componentDidMount() {
    document.querySelector('.ost-demo-proto-click')
      .addEventListener('click', function() {
        this.openHandler()
      }.bind(this), false);
    this.setState({ isLoading: true });
    this.requestHandler({}, false)
      .then(rsp => {
        if(rsp.status === 200) {
          this.setState({
            book: rsp.message
          });
        }
        this.setState({ isLoading: false });
      })
      .catch(err => {
        this.setState({
          book: err.message
        });
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { open, book, isLoading } = this.state;
    const bookContent = isLoading ? 'progressing' : (book ? <span>{ book }</span>: '');
    return (
      <div className="ost-demo">
        {
          open ?
            <div className={`ost-demo-view ${ open ? 'on' : 'off'}` }>
              Build encapsulated components that manage their own state, then compose them to make complex UIs.
              <br/>
              Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
            </div> :
            null
        }
        <div className="ost-demo-book">My book is { bookContent } from asyn operation</div>
        <button className="ost-demo-proto-click">Hit Me</button>
        <button className="ost-demo-comp-click" onClick={this.openHandler}>Hit Me</button>
      </div>
    )
  }
}

export default OstDemo;