import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OstMask from '../OstMask';
import delSvg from './delete.svg';

const KeyboardArr = [
  {
    key: 1,
    en: ''
  },
  {
    key: 2,
    en: 'A B C'
  },
  {
    key: 3,
    en: 'D E F'
  },
  {
    key: 4,
    en: 'G H I'
  },
  {
    key: 5,
    en: 'J K L'
  },
  {
    key: 6,
    en: 'M N O'
  },
  {
    key: 7,
    en: 'P Q R S'
  },
  {
    key: 8,
    en: 'T U V'
  },
  {
    key: 9,
    en: 'W X Y Z'
  }
]

export default class OstNumKeyboard extends Component {

  state = {
    keyStyle: {},
    value: ''
  }

  upDateKeyStyle = () => {
    
    if (!this.box) return;

    const _this = this;

    setTimeout(() => {
       _this.setState({
                keyStyle: {
                          width: `${_this.box.clientWidth * 0.31}px`,
                          height: `${_this.box.clientWidth * 0.12}px`,
                          marginLeft: `${_this.box.clientWidth * 0.0175}px`,
                          marginTop: `${_this.box.clientWidth * 0.0175}px`
                        }
      })
    }, 100);
  }

  componentDidMount() {
    this.upDateKeyStyle();
    this.resetValue();
  }

  componentDidUpdate () {
    const {show, keyBoardRef} = this.props;
    
    if ((!this.state.keyStyle.width) && show) {
      
      this.upDateKeyStyle();
    }

    keyBoardRef && keyBoardRef(this.box);
    this.resetValue();
  }

  updateValue = (key) => {
    const {onChange, maxLength} = this.props;
    const {value} = this.state;
    const _maxLength = Number(maxLength);
    const _v = _maxLength ? (value + key).slice(0, _maxLength) : (value + key);

    this.setState({value: _v});
    onChange && onChange(_v);
  }

  delValue = () => {
    const {onChange} = this.props;
    const {value} = this.state;

    const _value =  value.slice(0, value.length -1);

    this.setState({value: _value});
    onChange && onChange(_value);
  }

  // when close, reset value
  resetValue = () => {
    const {value} = this.state;
    const {show, resetWhenClose} = this.props;
    const _this = this;
    
    if (!show && value && resetWhenClose) {
      setTimeout(() => this.setState({value: ''}), 300);
    }
  }

  render() {
    const {children, onChange, show, style, showMask, lock} = this.props;

    return (
                <OstMask 
                    show={show} 
                    key='00' 
                    bottom={'0'} 
                    right={'0'} 
                    left={'0'} 
                    unlock={lock ? false : true} 
                    style={{display: showMask ? null : 'none'}}>

                    {children}
                    <div
                      ref={d => this.box = d}  
                      className="ost-numKeyboard"  
                      style={{
                        ...style
                      }}>
                      {
                        KeyboardArr.map((item, i) =>
                        <div  
                          style={this.state.keyStyle}
                          className="ost-numKeyboard-item" 
                          onClick={e => {

                            e.nativeEvent.stopImmediatePropagation();
                            this.updateValue(item.key);
                          }}
                          key={i}>
                            {item.key}
                        </div>
                      )}

                      <div style={this.state.keyStyle} />

                      <div 
                        className="ost-numKeyboard-item" 
                        onClick={e => {

                            e.nativeEvent.stopImmediatePropagation();
                            this.updateValue(0);
                        }}
                        style={this.state.keyStyle}>
                          0
                      </div>
                      <div
                        className="ost-numKeyboard-del"
                        onClick={e => {

                          e.nativeEvent.stopImmediatePropagation();
                          this.delValue();
                        }}
                        style={this.state.keyStyle}>
                        <img src={delSvg} />
                      </div>
                    </div>
            </OstMask>
        );
  }
}

OstNumKeyboard.propTypes = {
  style: PropTypes.object
}


