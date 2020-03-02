import React from 'react';
import { OstWhiteSpace } from 'components';
import Factory, { defer } from '../utils/factory';

export default describe('OstWhiteSpace test section', function() {

  const paragraph1 = 'React 组件使用一个名为 render() 的方法， 接收数据作为输入，输出页面中对应展示的内容。 下面这个示例中类似XML的写法被称为JSX. 输入的数据通过 this.props 传入 render() 方法。';
  const paragraph2 = 'In addition to taking input data (accessed via this.props), a components can maintain internal state data (accessed via this.state). When a components’s state data changes, the rendered markup will be updated by re-invoking render().'
  const style = { background: '#15b5ff' };
  const container = (Comp, props) => (
    <div>
      <p>{paragraph1}</p>
      <Comp {...props}/>
      <p>{paragraph2}</p>
    </div>
  );

  after(function() {
    Factory.destroyAppContainer(true);
  });

  beforeEach(function() {
    Factory.destroyAppContainer(true);
  });

  it('should render correctly', async function() {
    const component = Factory.createComponent(<OstWhiteSpace/>);
    expect(component.find('.ost-white-space').exists()).to.equal(true);
  });

  it('class name should have xs', async function() {
    const component = Factory.createComponent(container(OstWhiteSpace, { size: 'xs', style }));
    await defer(200);
    expect(component.find('.ost-white-space-xs').exists()).to.equal(true);
  });

  it('class name should have sm', async function() {
    const component = Factory.createComponent(container(OstWhiteSpace, { size: 'sm', style }));
    await defer(200);
    expect(component.find('.ost-white-space-sm').exists()).to.equal(true);
  });

  it('class name should have lg', async function() {
    const component = Factory.createComponent(container(OstWhiteSpace, { size: 'lg', style }));
    await defer(200);
    expect(component.find('.ost-white-space-lg').exists()).to.equal(true);
  });

  it('class name should have xl', async function() {
    const component = Factory.createComponent(container(OstWhiteSpace, { size: 'xl', style }));
    await defer(200);
    expect(component.find('.ost-white-space-xl').exists()).to.equal(true);
  });
});