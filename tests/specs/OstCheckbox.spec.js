import React from 'react';
import sinon from 'sinon';
import { OstCheckbox } from 'components';
import Factory, { defer, destroyElement } from '../utils/factory';
describe('OstCheckbox test section', function() {

  after(function() {
    destroyElement('#App');
  });

  it('should render correctly', function() {
    const component = Factory.createComponent(<OstCheckbox />);
    expect(component.find('.ost-checkbox').exists()).to.equal(true);
    expect(component.find('.ost-checkbox-disabled').exists()).to.equal(false);
    expect(component.find('img').exists()).to.equal(true);
  });

  /**
   * 模拟点击 当OstCheckbox组件属性disabled为true时不可点击
   * 使用sinon.spy监听一个函数的调用情况
   */
  it('should not call clickCb if disabled was true', function() {
    const clickCb = function() {};
    const cb = sinon.spy(clickCb);
    const component = Factory.createComponent(
      <OstCheckbox disabled onClick={cb} />
    );
    component.find('.ost-checkbox').simulate('click');
    expect(cb.callCount).to.equal(0); //clickCb的点用次数应该为0才是正确的
  });

  it('should call clickCb if disabled was false', async function() {
    const clickCb = function() {};
    const cb = sinon.spy(clickCb);
    const component = Factory.createComponent(
      <OstCheckbox disabled={false} onClick={cb} />
    );
    component.find('.ost-checkbox').simulate('click');
    await defer(250);
    expect(cb.callCount).to.equal(1);
    component.find('.ost-checkbox').simulate('click');
    component.find('.ost-checkbox').simulate('click');
    component.find('.ost-checkbox').simulate('click');
    await defer(250);
    expect(cb.callCount).to.equal(4);
  });

  it('should get correct state by click with defaultChecked was true ', async function() {
    const clickCb = function() {};
    const component = Factory.createComponent(
      <OstCheckbox onClick={clickCb} defaultChecked />
    );
    component.find('.ost-checkbox').simulate('click');
    await defer(250);
    expect(component.state().checked).to.equal(false);
  });

  it('should get correct state by click with defaultChecked was false ', async function() {
    const clickCb = function() {};
    const component = Factory.createComponent(
      <OstCheckbox onClick={clickCb} defaultChecked={false} />
    );
    component.find('.ost-checkbox').simulate('click');
    await defer(250);
    expect(component.state().checked).to.equal(true);
  });

  it('should get correct state by without onclick prop', async function() {
    const component = Factory.createComponent(
      <OstCheckbox defaultChecked={false} />
    );
    component.find('.ost-checkbox').simulate('click');
    await defer(250);
    expect(component.state().checked).to.equal(true);
  });
});