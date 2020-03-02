import React, {Component} from 'react';
import PropTypes from 'prop-types';


class OstHeader extends Component {
  render() {
    const { title, leftOpt, style, titleStyle} = this.props;

    return (
      [
        <div className={"ost-header"} key='0' style={style}>
          <div
            className={"ost-header-left"}
            onClick={() => {
              if (leftOpt && leftOpt.onClick) {
                leftOpt.onClick();
              } else {
                window.history.back();
              }
            }}>
            <i />
          </div>
          <div className="ost-header-title" style={titleStyle}>{title}</div>
          <div className={"ost-header-right"} />
        </div>,
        <div key='1' className="ost-header-height-polyfill" />
      ]
    )
  }
}


export default OstHeader;

OstHeader.propTypes = {
  title: PropTypes.string,
  leftOpt: PropTypes.object
}
