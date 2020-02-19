import React from 'react';
import Factory, { destroyElement, createEvent } from '../utils/factory';
import { OstDemo } from 'components';

export default describe('OstDemo test section', function() {

  let component;

  before(function() {
    component = Factory.createComponent(<OstDemo/>);
  });

  after(function() {
    destroyElement('#App');
  });

  it('render demo correctly', function() {
    expect(component.find('.ost-demo').exists()).to.equal(true);
  });

  it('proto clicking should to change', function(done) {
    const btn = document.querySelector('.ost-demo-proto-click');
    createEvent('click', btn);
    setTimeout(function() {
      component.mount();
      expect(component.find('.ost-demo-view').exists()).to.equal(true);
      createEvent('click', btn);
      setTimeout(function() {
        component.mount();
        expect(component.find('.ost-demo-view').exists()).to.equal(false);
        done();
      }, 500)
    }, 500);
  });

  it('composition clicking should to change', function(done) {
    component.find('.ost-demo-comp-click').simulate('click');
    setTimeout(function() {
      component.mount();
      expect(component.find('.ost-demo-view').exists()).to.equal(true);
      component.find('.ost-demo-comp-click').simulate('click');
      setTimeout(function() {
        component.mount();
        expect(component.find('.ost-demo-view').exists()).to.equal(false);
        done();
      }, 500);
    }, 500);
  });

  it('should request correctly', function(done) {
    const instance = new OstDemo();
    instance.requestHandler({})
      .then(rsp => {
        expect(rsp.message).to.equal('Jane');
        return instance.requestHandler({}, true)
      })
      .then(null, err => {
        expect(err.message).to.equal('bad');
        expect(err.status).to.equal(500);
        done();
      })
      .catch(done);
  })
});