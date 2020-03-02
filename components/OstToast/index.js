import ReactDOM from 'react-dom';
import React, {Component, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask/index';
import clsPrefix from 'cls-prefix';

class OstToast extends Component {
  constructor(props) {
    super(props);

    this.state = {show: true};
  }

  componentDidMount() {
    const {time, container} = this.props;
    this._setTimeout = setTimeout(() => this.setState(
      {show: false},
      () => {
        clearTimeout(this._setTimeout);
        container.parentNode.removeChild(container);
      }
    ), time);
  }

  componentWillUnmount() {
    clearTimeout(this._setTimeout);
  }

  render() {
    const {text} = this.props;
    const {show} = this.state;

    return (
      <OstMask
        maskColor={'rgba(0, 0, 0, 0)'}
        childrenStyle={{padding: '0 10%'}}
        show={show} >
        <span className="ost-toast">
            {text}
        </span>
      </OstMask>
    );
  }
}

OstToast.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.number,
  container: PropTypes.object
}

const getContainer = () => {
  const container = document.createElement('div');
  const containerId = `ost-toast-container-${(new Date().getTime())}`;
  container.setAttribute('id', containerId);
  document.body.appendChild(container);
  return container;
}

function show(text, time) {

  time = time * 1000 || 2000;

  const container = getContainer();

  ReactDOM.render(
    <OstToast text={text} time={time} container={container} />,
    container
  );
}

export default {
  show
};
