import React from 'react';
import { OstMask } from 'components';
import { mount, shallow } from 'enzyme';
import { destroyElement } from '../utils/factory';
import sinon from "sinon";

export default describe('OstMask test section', function() {

  /**
   * 组件的模拟点击环境
   * @param props
   * @returns {ReactComp}
   * @constructorn
   */
  const TestContent = (props) => {
    const { closeCb, openCb } = props;
    return (
      <div className="mask">
        <button id="closeBtn" onClick={closeCb}>off</button>
        <button id="openBtn" onClick={openCb}>open</button>
      </div>
    )
  };

  after(function() {
    /* 销毁DOM环境下的OstLoading产生的html */
    destroyElement('#ost-mask-container');
  });

  it('render <OstMask> correctly', function() {
    const component = shallow(<OstMask show/>);
    expect(component.exists()).to.equal(true);
  });

  it('close <OstMask> correctly', function(done) {
    const component = mount(<OstMask show/>);

    const cb = sinon.spy(closeMask);
    const ctrl = mount(<TestContent closeCb={cb}/>);
    ctrl.find('#closeBtn').simulate('click');
    expect(cb.callCount).to.equal(1);

    setTimeout(function() {
      expect(component.props().show).to.equal(false);
      done();
    }, 500);

    /* 关闭OstMask组件的方法 */
    function closeMask() {
      component.setProps({
        show: false
      });
    }
  });

  it('open <OstMask> correctly', function(done) {
    const component = mount(<OstMask show={false}/>);

    const cb = sinon.spy(openMask);
    const ctrl = mount(<TestContent openCb={cb}/>);
    ctrl.find('#openBtn').simulate('click');
    expect(cb.callCount).to.equal(1);

    setTimeout(function() {
      expect(component.props().show).to.equal(true);
      done();
    }, 500);

    function openMask() {
      component.setProps({
        show: true
      });
    }
  });
})