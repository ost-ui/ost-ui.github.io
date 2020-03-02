import React, {Component, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import clsPrefix from 'cls-prefix';
import delIcon from './delIcon.svg';


const sixBitClsPre = new clsPrefix('ost-input-sixBitCode').splice;

class SixBitCode  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: props.autoFocus ? true : false
    };

    props.autoFocus && props.onFocus && props.onFocus();
  }

  refArr = [];

  SixBitCodeArr = [
            {
              value: ''
            },
            {
              value: ''
            },
            {
              value: ''
            },
            {
              value: ''
            },
            {
              value: ''
            },
            {
              value: ''
            }
  ];

  componentDidMount() {
    this.theOnBlur();
  }

  componentDidUpdate() {
    this.theOnBlur();
  }

  componentWillUpdate(nextProps, nextState) {
    this.diffOnChange(nextProps.value);
  }

  diffOnChange = (value) => {
    const {onChange} = this.props;
    const newVal = value.slice(0, 6);

    let _val = '';

    for (let i = 0; i < this.SixBitCodeArr.length; i++) {
      _val += this.SixBitCodeArr[i].value;
    }

    if (_val !== newVal) {
      onChange && onChange(newVal);
    }
  }

  _eventListener = e => {
    const {value, onBlur} = this.props;

    const _length = this.refArr.filter(ele => e.target === ele ).length;

    if ( !_length ) {

        onBlur && onBlur(value);
        this.setState({isFocus: false});
    }
  }

  theOnBlur = () => {
    const {isFocus} = this.state;

    if (isFocus) {

      document.addEventListener("click", this._eventListener, false);
    } else {

      document.removeEventListener("click",this._eventListener, false);
    }
  }

  componentWillUnmount() {
      document.removeEventListener("click",this._eventListener, false);
  }


  getEmptyindex = () => {
    const {SixBitCodeArr} = this;

    for (let i = 0; i < SixBitCodeArr.length; i++) {
      if (!SixBitCodeArr[i].value) {
        return i;
      }
    }
  }

  render() {
    const {SixBitCodeArr} = this;
    const {isFocus} = this.state;
    const {value = '', onFocus, style, itemStyle} = this.props;

    const vArr = value.split('');

    for (let i = 0; i < SixBitCodeArr.length; i++) {

      if (vArr[i]) {
        SixBitCodeArr[i].value = vArr[i];
      } else {
        SixBitCodeArr[i].value = '';
      }
    }

    return (
        <div
          style={style}
          className={sixBitClsPre()}>
          {
            SixBitCodeArr.map((ele, i) => {

              return (
                <div
                  onClick={()=>{
                    this.setState({isFocus: true});
                    !isFocus && onFocus && onFocus(value);
                  }}
                  ref={e => this.refArr.push(e)}
                  style={itemStyle}
                  className={sixBitClsPre(
                      'fakeInput',
                      {'fakeInput-onFocus': (i === this.getEmptyindex()) && isFocus}
                  )}
                  key={i}>
                  {ele.value}
                </div>
            )})
          }
        </div>
    );
  }
}

const ostInputClsPre = new clsPrefix('ost-input').splice;

class OstInput extends Component {

 static sixBit = SixBitCode;

  constructor(props) {
    super(props);
    this.state = { closeBtn: false };
  }

  componentWillUnmount() {
    clearTimeout(this._setTimeout);
  }

  render() {
    const {
      defaultValue,
      value,
      onChange,
      onDel,
      placeholder,
      disabled,
      type,
      maxLength,
      onBlur,
      onFocus,
      countdown,
      countstart,
      countend,
      countDisabled
    } = this.props;

    return (
      <div className={ostInputClsPre()}>
        <input
          className={
            ostInputClsPre({disabled: disabled})
          }
          type={type || "text"}
          disabled={disabled}
          maxLength={maxLength}
          defaultValue={defaultValue}
          value={(maxLength && value) ? value.slice(0, maxLength) : value}
          onBlur={()=>{
            const _this = this;

            _this._setTimeout = setTimeout(() => {

                onBlur && onBlur();

                _this.setState({closeBtn: false})
            }, 300);
          }}
          onFocus={()=>{
             onFocus && onFocus();
             this.setState({closeBtn: true})
          }}
          onChange={e=> {

            let _e;

            if (maxLength) {
                 _e = {
                  ...e,
                  currentTarget: {
                    ...e.currentTarget,
                    value: e.currentTarget.value.slice(0, maxLength)
                  },
                  target: {
                    ...e.target,
                    value: e.target.value.slice(0, maxLength)
                  }
                }
            } else {
              _e = e;
            }

            onChange && onChange(_e);
          }}
          placeholder={placeholder}
        />
        {
          value && onDel && this.state.closeBtn &&
          <div className={ostInputClsPre('delBtn')}>
            <img
              onClick={onDel}
              src={delIcon} />
          </div>
        }
        {
          countdown &&
          <Countdown
            countDisabled={countDisabled}
            countstart={countstart}
            countend={countend}
            countdown={countdown}/>
        }
      </div>
    )
  }
}


export default OstInput;

OstInput.propTypes = {
  title: PropTypes.string,
  countdown: PropTypes.number
}

const countdownClsPre = new clsPrefix('ost-input-countdown').splice;

function Countdown({countdown, countstart, countend, countDisabled}) {
  const [firstTimeExec, updateExecTimes] = useState(true);
  
  const [countState, countSetState] = useState(countdown);

  const [counting, countingSetState] = useState(false);

  const _setInterval = useRef(null);
  let n = countdown;
  const countSetStateHandler = () => {
   
    if (n <= 0) {
      n = countdown;
      countSetState(countdown);
      clearInterval(_setInterval.current);
      //倒计时结束的回调
      countend && countend();
      updateExecTimes(false);
      countingSetState(false);
    } else {
      countSetState(--n);
    }
  }

  const onClickCountBtn = () => {
    
    if (countDisabled || (countState !== countdown)) {
      // Disabled 状态或正则倒计时中
      return;
    }

    const resetCount = () => {n = 0};
    // countstart 的回调
    countstart && countstart(resetCount);

    countingSetState(true);
    _setInterval.current = setInterval(countSetStateHandler, 1000);
  }

  useEffect(() => () => {
    clearInterval(_setInterval.current);
  }, []);

  return (
    <div
      onClick={onClickCountBtn}
      className={countdownClsPre()}>
      <span
        className={countdownClsPre('item', {
          'disabled': countDisabled,
          'hide': !firstTimeExec || counting
        })}>
        获取验证码
      </span>
      <span
        className={countdownClsPre('item', {
          'disabled': true,
          'hide': !counting
        })}>
        {countState}s后重新发送
      </span>
      <span
        className={countdownClsPre('item', {
          'disabled': countDisabled,
          'hide': firstTimeExec || counting
        })}>
        重发
      </span>
    </div>
  )
}