import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkedSvg from './images/checked.svg';
import uncheckedSvg from './images/unchecked.svg';

const checkedImg = <img src={checkedSvg} />
const uncheckedImg = <img src={uncheckedSvg} />

export default class OstCheckbox extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: !!props.defaultChecked };
  }

  render() {
    const { onClick, style, disabled, checked } = this.props;

    return (
      <div
        className={classnames(
          "ost-checkbox",
          {'ost-checkbox-disabled': disabled}
        )}
        style={style}
        onClick={checked ? onClick : () => {
          if (disabled) return;
          onClick && onClick({'checked': !this.state.checked})
          this.setState({checked: !this.state.checked})
        }}>
        {
          typeof checked === 'boolean' && (checked ? checkedImg : uncheckedImg)
        }
        { 
          typeof checked !== 'boolean' && (this.state.checked ? checkedImg : uncheckedImg)
        }
      </div>
    )
  }
}

OstCheckbox.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  defaultChecked: PropTypes.bool
};
