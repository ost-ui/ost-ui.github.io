import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { OstLoading } from 'components';
import { destroyElement } from '../utils/factory';

export default describe('OstLoading test section', function() {

  /**
   * 组件的模拟点击环境
   * @param props
   * @returns {ReactComp}
   * @constructor
   */
  const TestContent = (props) => {
    const { closeCb, openCb } = props;
    return (
      <div className="loading-test">
        <button id="closeBtn" onClick={closeCb}>off</button>
        <button id="openBtn" onClick={openCb}>open</button>
      </div>
    )
  };

  after(function() {
    /* 销毁DOM环境下的OstLoading产生的html */
    destroyElement('#ost-mask-container');
  });

  it('render <OstLoading> correctly', function() {
    const component = shallow(<OstLoading isLoading={true}/>);
    expect(component.exists()).to.equal(true);
  });

  it('close <OstLoading> correctly', function(done) {

    /* OstLoading组件深层渲染 */
    let isLoading = true;
    const component = mount(<OstLoading isLoading={isLoading}/>);

    /* 使用spy对closeLoading方法做监听 */
    const cb = sinon.spy(closeLoading);
    const ctrl = mount(<TestContent closeCb={cb}/>);
    ctrl.find('#closeBtn').simulate('click');

    /* 进行模拟点击后测试closeLoading的方法调用次数 */
    expect(cb.callCount).to.equal(1);
    setTimeout(function() {
      expect(component.props().isLoading).to.equal(false);
      done();
    }, 500);

    /* 关闭OstLoading组件的方法 */
    function closeLoading() {
      component.setProps({
        isLoading: false
      });
    }
  });

  it('open <OstLoading> correctly', function(done) {

    /* OstLoading组件深层渲染 */
    let isLoading = false;
    const component = mount(<OstLoading isLoading={isLoading}/>);

    /* 使用spy对closeLoading方法做监听 */
    const cb = sinon.spy(openLoading);
    const ctrl = mount(<TestContent openCb={cb}/>);
    ctrl.find('#openBtn').simulate('click');

    /* 进行模拟点击后测试openLoading的方法调用次数 */
    expect(cb.callCount).to.equal(1);
    setTimeout(function() {
      expect(component.props().isLoading).to.equal(true);
      done();
    }, 1000);

    /* 打开OstLoading组件的方法 */
    function openLoading() {
      component.setProps({
        isLoading: true
      });
    }
  });
})