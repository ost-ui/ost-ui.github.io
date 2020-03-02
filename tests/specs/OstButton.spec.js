import React from 'react';
import { OstButton } from 'components';
import Factory, { destroyElement, defer } from '../utils/factory';
describe('OstButton test section', function() {

  after(function() {
    destroyElement('#App');
  });

  it('should render correctly', function() {

    const component = Factory.createComponent(<OstButton>OK</OstButton>);
    expect(component.find('a').hasClass('ost-button')).to.equal(true);
    expect(component.find('.ost-button').text()).to.contain('OK');
    expect(component.find('.ost-button').text()).to.not.contain('oK');
    expect(component.find('.ost-button').text()).to.not.contain('Ok');
  });

  it('should have className contains type prop', async function() {

    const component = Factory.createComponent(<OstButton type="ghost">按钮</OstButton>);
    expect(component.find('a').hasClass('ost-button-ghost')).to.equal(true);
    component.setProps({ type: 'warning' });

    await defer(250);
    expect(component.find('a').hasClass('ost-button-warning')).to.equal(true);
    component.setProps({ type: 'primary' });

    await defer(250);
    expect(component.find('a').hasClass('ost-button-primary')).to.equal(true);
    component.setProps({ size: 'small' });

    await defer(250);
    expect(component.find('a').hasClass('ost-button-small')).to.equal(true);
    component.setProps({ inline: true });

    await defer(250);
    expect(component.find('a').hasClass('ost-button-inline')).to.equal(true);
  });
});