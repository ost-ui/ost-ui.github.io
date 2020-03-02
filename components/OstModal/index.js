import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask';


class Basic extends Component {

  componentDidMount() {
    const {priBtn, secBtn} = this.refs;
    if (priBtn && secBtn) {
      const btnWidth = Math.max(priBtn.clientWidth, secBtn.clientWidth);
      priBtn.style.width = secBtn.style.width = `${btnWidth}px`;
    }
  }

  render() {
    const { text, button, show} = this.props;

    return (
      <OstMask show={show} >
        <div className="ost-modal-basic">
          <div className="ost-modal-basic-box">
            <p className="ost-modal-basic-primary">
              {text.primary || ''}
            </p>
            <p className="ost-modal-basic-secondary">
              {text.secondary || ''}
            </p>
            {
              button && button[0] &&
              <div className="ost-modal-basic-priBtn">
                <button ref='priBtn' onClick={button[0].onPress}>
                  {button[0].text}
                </button>
              </div>
            }
            {
              button && button[1] &&
              <div className="ost-modal-basic-secBtn">
                <button ref='secBtn' onClick={button[1].onPress}>
                  {button[1].text}
                </button>
              </div>
            }
          </div>
        </div>
      </ OstMask>
    );
  }
}


export default class OstModal extends Component {
  static basic = Basic;

  render() {
    const {children, style} = this.props;

    return (
      <div className="ost-card" style={style}>
        {children}
      </div>
    );
  }
}

OstModal.propTypes = {
  style: PropTypes.object
}


