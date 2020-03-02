import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class OstButton extends Component {
  static defaultProps = {
    fixedCls: 'ost-button',
    inline: false
  }
  constructor(props) {
    super(props)
  }
  isString = (str) => {
    return typeof str === 'string';
  }

  // Insert one space between two chinese characters automatically.
  insertSpace = (child) => {
    const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
    const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
    if (this.isString(child.type) && isTwoCNChar(child.props.children)) {
      return React.cloneElement(
        child,
        {},
        child.props.children.split('').join(' '),
      );
    }
    if (this.isString(child)) {
      if (isTwoCNChar(child)) {
        child = child.split('').join(' ');
      }
      return <span>{child}</span>;
    }
    return child;
  }

  render() {
    const {
      children,
      fixedCls,
      className,
      type,
      size,
      inline,
      disabled,
      loading,
      iconType
    } = this.props;
    const wrapClass = classnames(fixedCls, className, {
      [`${fixedCls}-${type}`]: type,
      [`${fixedCls}-ghost`]: type === 'ghost',
      [`${fixedCls}-warning`]: type === 'warning',
      [`${fixedCls}-small`]: size === 'small',
      [`${fixedCls}-inline`]: inline,
      // [`${fixedCls}-disabled`]: disabled,
      // [`${fixedCls}-loading`]: loading,
      // [`${fixedCls}-icon`]: !!iconType,
    })
    const kids = React.Children.map(children, this.insertSpace);
    return (
      <a className={wrapClass}>{kids}</a>
    )
  }
}

OstButton.propTypes = {
  fixedCls: PropTypes.string,
  inline: PropTypes.bool.isRequired
}
