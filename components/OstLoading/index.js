import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask/index';
import svgLoading from './images/loading.svg';

class OstLoading extends Component {
  render() {
    const {isLoading} = this.props;

    return <OstMask show={isLoading} >
      <div className="ost-loading">
        <img src={svgLoading} className="ost-loading-svg"/>
      </div>
    </OstMask>
  }
}


export default OstLoading;

OstLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}