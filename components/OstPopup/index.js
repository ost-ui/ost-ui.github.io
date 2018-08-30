import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask/index';

export default class OstPopup extends Component {
  render() {
    const {show} = this.props;

    return <OstMask show={show} >
    <div className='ost-popup'>popup!!!</div>
      
    </OstMask>
  }
}


OstPopup.propTypes = {
  show: PropTypes.bool.isRequired
}