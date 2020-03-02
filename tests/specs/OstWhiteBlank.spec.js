import React from 'react';
import { OstWhiteBlank } from 'components';
import Factory, { defer } from '../utils/factory';

export default describe('OstWhiteBlank test section', function() {

  const text = '除了使用外部传入的数据以外 (通过 this.props 访问传入数据), 组件还可以拥有其内部的状态数据 (通过 this.state 访问状态数据)';
  const style = { background: '#ffc70f' };
  const Container = (props) => (
    <div style={style}>
      <span>{text}</span>
      <OstWhiteBlank size={props.size} style={style}>{ text }</OstWhiteBlank>
      <span>{text}</span>
    </div>
  );

  after(function() {
    // Factory.destroyAppContainer(true);
  });

  it('should render correctly', async function() {
    const component = Factory.createComponent(<OstWhiteBlank/>);
    expect(component.find('.ost-white-blank').exists()).to.equal(true);
    expect(component.find('.ost-white-blank-md').exists()).to.equal(true);
  });
  
  it('should change from props', async function() {
    const component = Factory.createComponent(<Container/>);
    component.setProps({ size: 'sm' });

    defer(250);
    expect(component.find('.ost-white-blank-sm').exists()).to.equal(true);
    component.setProps({ size: 'lg' });

    defer(250);
    expect(component.find('.ost-white-blank-lg').exists()).to.equal(true);
  });
});