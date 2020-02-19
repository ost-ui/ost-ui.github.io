import React from 'react';
import sinon from 'sinon';
import { OstHeader } from 'components';
import Factory, { destroyElement, defer } from '../utils/factory';
describe('OstHeader test section', function() {

  after(function() {
    destroyElement('#App');
  });

  it('should render correctly', function() {
    const component = Factory.createComponent(<OstHeader />);
    expect(component.find('.ost-header').exists()).to.equal(true);
    expect(component.find('.ost-header-left').exists()).to.equal(true);
    expect(component.find('.ost-header-title').exists()).to.equal(true);
    expect(component.find('.ost-header-right').exists()).to.equal(true);
  });


  /**
   * below 小于 | most 小于等于
   * above 大于 | least 大于等于
   */
  it('should get correct prop', async function() {
    const component = Factory.createComponent(<OstHeader title="My title 1"/>);
    expect(component.find('.ost-header-title').text()).to.equal('My title 1');
    component.setProps({ title: 'My title 2' });
    await defer(200);
    expect(component.find('.ost-header-title').text()).to.equal('My title 2');
    component.setProps({ title: 'My title 3' });
    component.setProps({ title: 'My title 4' });
    component.setProps({ title: 'My title 5' });

    await defer(200);
    expect(component.find('.ost-header-title').text()).to.equal('My title 5');
    const title = 'My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5My title 5 My title 5 My title 5 ' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5' +
      ' My title 5 My title 5 My title 5 My title 5 My title 5 My title 5 My title 5';
    component.setProps({ title: title });

    await defer(200);
    expect(component.find('.ost-header-title').text()).to.equal(title);
    const titleDOMNode = component.find('.ost-header-title').getDOMNode();
    const headerDOMNode = component.find('.ost-header').getDOMNode();
    const titleDOMNodeHeight = window.getComputedStyle(titleDOMNode).height;
    const headerDOMNodeHeight = window.getComputedStyle(headerDOMNode).height;
    expect(parseFloat(titleDOMNodeHeight)).to.most(parseFloat(headerDOMNodeHeight));
  });

  it('should call left func with leftOpt prop', async function() {
    function callCb() {}
    const cb = sinon.spy(callCb);
    const component = Factory.createComponent(
      <OstHeader
        title="My title"
        leftOpt={{onClick: cb}}
      />
    );
    component.find('.ost-header-left').simulate('click');
    await defer(200);
    expect(cb.callCount).to.equal(1);
    component.find('.ost-header-left').simulate('click');
    await defer(200);
    expect(cb.callCount).to.equal(2);
  });

  it('should call without leftOpt prop', async function() {
    function callCb() {}
    const cb = sinon.spy(callCb);
    const component = Factory.createComponent(<OstHeader title="My title" />);
    /**
     * 使用数据劫持验证是否调用window.back
     */
    Object.defineProperty(history, 'back', {
      get: function() {
        return function() { cb() }
      }
    });
    component.find('.ost-header-left').simulate('click');
    expect(cb.callCount).to.equal(1);
  });
});