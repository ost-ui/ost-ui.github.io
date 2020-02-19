import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class OstWhiteBlank extends React.Component {
  static defaultProps = {
    fixedCls: 'ost-white-blank',
    size: 'md'
  }
  render() {
    const { fixedCls, size, className, style } = this.props;
    const wrapCls = classnames(fixedCls, `${fixedCls}-${size}`, className);
    return (
      <div className={wrapCls} style={style}></div>
    )
  }
}

OstWhiteBlank.propTypes = {
  fixedCls: PropTypes.string,
  size: PropTypes.string
}