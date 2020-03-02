import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class OstText extends React.Component {
  static defaultProps = {
    fixedCls: 'ost-text',
    size: 'md',
    multiLine: true// 是否多行显示，默认多行显示
  }

  render() {
    const {
      fixedCls,
      className,
      label,
      text,
      multiLine,
      type,
      size
    } = this.props;

    const wrapClass = classnames(fixedCls, className, {
      [`${fixedCls}-${type}`]: type,
      [`${fixedCls}-${size}`]: size
    })
    
    return <div className={wrapClass}>
      {label && <label className="ost-text-label">{label}</label>}
      <p className={ classnames({'ost-text-single-line': !multiLine}) }>{text}</p>
    </div>
  }
}

OstText.propTypes = {
  fixedCls: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  multiLine: PropTypes.bool.isRequired
}
