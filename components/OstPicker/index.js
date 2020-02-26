import React, {Component} from 'react';
import Picker from 'rmc-picker';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Popup from 'rmc-picker/lib/Popup';

class OstPickerCore extends Component {
  err = (str) => {throw new Error(str)};

  state = {
    pickerData: [],
    onActiveValue: null
  }

  filteredValue = [];

  filteredLabel = [];

  multiPickerDataCache = [];

  onChange = (value) => {
    const {onChange} = this.props;

    this.makePickersUpdate(value);

    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  }

  getChildrenData (item) {

    const children = item && item.children;

    if (!children || !children.length) return null;

    return children;
  }

  calcSelectedValues = (data, value) => {

    if (!value) {

      const item = data[0];

      this.filteredValue.push(item.value);

      this.filteredLabel.push(item.label);

      const _data = this.getChildrenData(item);

      if (!_data) return;

      this.calcSelectedValues(_data);
    }

    if (value && value instanceof Array) {
      this.filteredValue = [];
      this.filteredLabel = [];

      let _data = data;

      value.some((el, i, arr) => {

        if (!_data) return true;

        const item = _data.find(item => item.value === el);

        if (!item) {

          this.calcSelectedValues(_data);
          return true;
        }

        this.filteredValue.push(item.value);

        this.filteredLabel.push(item.label);

        _data = this.getChildrenData(item);

        if ((i + 1 === arr.length) && _data) {
          this.calcSelectedValues(_data);
        }
      })
    }
  }

  createMultiPickerData = () => {

    this.multiPickerDataCache = [];

    const {data} = this.props;

    let _data = data;

    this.filteredValue.forEach(el => {
      const item = _data.find(item => item.value === el);

      this.multiPickerDataCache.push(this.pickerFactory(_data));

      _data = this.getChildrenData(item);
    })
  }

  pickerFactory = (data) => {
    
    const pickerItems = data.map((el, i) => (
      <Picker.Item className="my-picker-view-item" value={el.value} key={`picker-item-${i}-${el.label}`}>
          {el.label}
      </Picker.Item>
    ));

    return (
      <Picker indicatorClassName="my-picker-indicator">
        {pickerItems}
      </Picker>
    )
  }

  makePickersUpdate = (value) => {
    const {data, communicate} = this.props;

    this.calcSelectedValues(data, value);
    this.createMultiPickerData();

    const options = {
      pickerData: this.multiPickerDataCache,
      onActiveValue: this.filteredValue
    }

    this.setState(options);

    communicate({
      selectedValue: this.filteredValue,
      selectedLabel: this.filteredLabel
    });
  }

  componentWillMount() {
    this.makePickersUpdate(this.props.value);
  }

  componentWillUnmount() {
    this.props.onHide && this.props.onHide();
  }

  render() {
    return (
      <div>
        <MultiPicker
          selectedValue={this.state.onActiveValue}
          onValueChange={this.onChange}
          onScrollChange={this.props.onScrollChange} >
          {
            this.state.pickerData.map(
              (el, i) => React.cloneElement(el, {key: `picker-${i}`})
            )
          }
        </MultiPicker>
      </div>
    );
  }
}


export default class OstPicker extends Component {

  communicate = ({selectedValue, selectedLabel}) => {
    this.selectedValue = selectedValue;
    this.selectedLabel = selectedLabel;
  }

  onOk = () => {
    const {
      onOk
    } = this.props;

    if (onOk && typeof onOk === 'function') {
      onOk(this.selectedValue, this.selectedLabel)
    }
  }


  render() {
    const popupContent = (
      <OstPickerCore
        communicate={this.communicate}
        {...this.props} />
    );

    const {
        children,
        title,
        onCancel,
        cancelText,
        okText
      } = this.props;

    return (
      <Popup
            transitionName="rmc-picker-popup-slide-fade"
            maskTransitionName="rmc-picker-popup-fade"
            content={popupContent}
            title={title}
            onDismiss={onCancel}
            onOk={this.onOk}
            dismissText={cancelText}
            okText={okText}
          >
            {children}
      </Popup>
    );
  }
}
