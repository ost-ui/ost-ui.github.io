import React from 'react';
import sinon from 'sinon';
import { OstInput } from 'components';
import Factory, { destroyElement, defer } from '../utils/factory';
describe('OstInput test section', function() {

  after(function() {
    destroyElement('#App');
  });

  it('should render correctly', function() {
    const component1 = Factory.createComponent(<OstInput />);
    expect(component1.find('.ost-input').exists()).to.equal(true);
    expect(component1.find('.ost-input-delBtn').exists()).to.equal(false);
    const component2 = Factory.createComponent(<OstInput.sixBit value="" />);
    expect(component2.find('.ost-input-sixBitCode').exists()).to.equal(true);
  });

  it('sixBit render default', function() {
    const component = Factory.shallowDefault(<OstInput.sixBit />);
    expect(component.find('.ost-input-sixBitCode').exists()).to.equal(true);
  });

  it('dispatch event:change', function() {
    const fn = sinon.spy();
    const component = Factory.mountDefault(<OstInput onChange={fn} />);
    const input = component.find('input');
    input.simulate('change');
    expect(fn.called).to.equal(true);
    input.simulate('change');
    expect(fn.called).to.equal(true);
  });

  it('dispatch event:change with args', function() {
    const state = {
      value: ''
    };
    const testCallBack = (e) => {
      state.value = e.target.value;
    };
    const component = Factory.createComponent(<OstInput onChange={testCallBack} maxLength={10}/>);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: 'w'
      }
    });
    expect(state.value).to.equal('w');
    input.simulate('change', {
      target: {
        value: 'wwwsafdsgwwasswwdasdwfdww'
      }
    });
    expect(state.value.length).to.equal(10);
  });

  it('dispatch event:focus and blur', async function() {
    const component = Factory.createComponent(<OstInput />);
    const input = component.find('input');
    input.simulate('focus');
    await defer(100);
    expect(component.state().closeBtn).to.equal(true);
    input.simulate('blur');
    await defer(350);
    expect(component.state().closeBtn).to.equal(false);
  });

  it('dispatch prop:focus and blur of OstInput.sixBit', async function() {
    const focusFn = sinon.spy();
    const blurFn = sinon.spy();
    const component = Factory.createComponent(<OstInput.sixBit onFocus={focusFn} onBlur={blurFn} value="" />);

    component.find('.ost-input-sixBitCode-fakeInput').at(0).simulate('click');
    expect(focusFn.called).to.equal(true);
    await defer(100);
    expect(component.state().isFocus).to.equal(true);

    document.dispatchEvent(new Event('click'));
    expect(blurFn.called).to.equal(true);
    await defer(100);
    expect(component.state().isFocus).to.equal(false);
  });
});
