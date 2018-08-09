import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';
import OstMask from '../OstMask/index'

/**
 *   Component 通用加载 loading API （ 需由父组件传入 ）:
 *   'isload'             值：bool            控制开关
 *
 *  例：   <Load isload = {true}/>
 *  注： true 为显示，false 为隐藏
*/

class OstLoading extends Component {
  render() {
    const {isLoading} = this.props;

    return <OstMask show={isLoading} >
      <div className="ost-loading">
        <span className="ost-loading-svg" ></span>
      </div>
    </OstMask>
  }
}


export default OstLoading;

OstLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}