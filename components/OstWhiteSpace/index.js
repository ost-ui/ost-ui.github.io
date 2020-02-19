import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class OstWhiteSpace extends React.Component {
  static defaultProps = {
    prefixCls: 'ost-white-space',
    size: 'md'
  }
  render() {
    const { prefixCls, className, size, style } = this.props;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);
    return (
      <div className={wrapCls} style={style}></div>
    )
  }
}

OstWhiteSpace.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.string
}
