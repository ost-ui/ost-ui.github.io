import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class OstSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: !!props.defaultChecked};
  }

  render() {
    const { onClick, disabled } = this.props;
    const { checked } = this.state;
    return (
      <div
        onClick={() => {
          this.setState({checked: !checked});
          onClick && onClick({'checked': !checked});
        }}
        className={
          classnames(
            "ost-swtich",
            {
              'ost-swtich-checked': checked,
              'ost-swtich-unchecked': !checked,
              'ost-swtich-disabled': disabled
            }
          )}>
        <span className={
          classnames(
            "ost-swtich-dot",
            {
              "ost-swtich-dot-checked": checked,
              'ost-swtich-dot-unchecked': !checked
            }
          )
        }/>
      </div>
    )
  }
}


export default OstSwitch;

OstSwitch.propTypes = {
  checked: PropTypes.bool
}
