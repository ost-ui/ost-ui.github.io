import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import delIcon from './delIcon.svg';


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
          className='ost-input-sixBitCode'>
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
                  className={classnames(
                    'ost-input-sixBitCode-fakeInput',
                    {'ost-input-sixBitCode-fakeInput-onFocus': (i === this.getEmptyindex()) && isFocus}
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
      onFocus
    } = this.props;

    return (
      <div className='ost-input'>
        <input
          className={
            classnames({
              "ost-input-disabled": disabled
             })
          }
          type={type || "text"}
          disabled={disabled}
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
          <div className='ost-input-delBtn'>
            <img
              onClick={onDel}
              src={delIcon} />
          </div>
        }
      </div>
    )
  }
}


export default OstInput;

OstInput.propTypes = {
  title: PropTypes.string
}
