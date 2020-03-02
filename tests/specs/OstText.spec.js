import React from 'react';
import { OstText } from 'components';
import Factory, { defer } from '../utils/factory';

describe('OstText test section', function() {

  let component;
  const allTime = 1900;
  const perTime = allTime / 10;
  const text1 = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';
  const text2 = 'React 可以非常轻松地创建用户交互界面。为你应用的每一个状态设计简洁的视图，在数据改变时 React 也可以高效地更新渲染界面。';
  const label1 = 'Declarative';
  const label2 = '声明式';

  it('should render correctly', function() {
    const component = Factory.createComponent(<OstText/>);
    expect(component.find('div').exists()).to.equal(true);
    expect(component.find('label').exists()).to.equal(false);
    expect(component.find('p').exists()).to.equal(true);
    expect(component.find('p')).to.have.lengthOf(1);

  });

  before(function() {
    component = Factory.createComponent(<OstText text={text1}/>);
  });

  it('should have text', function() {
    expect(component.find('p').text()).to.contain(text1);
    expect(component.find('label').exists()).to.equal(false);
  });

  it('text should change', async function() {
    component.setProps({ text: text2 });
    await defer(perTime);
    expect(component.find('p').text()).to.not.contain(text1);
    expect(component.find('p').text()).to.contain(text2);
  });

  it('should have primary style and label', async function() {
    component.setProps({ label: label1, type: 'primary' });
    await defer(perTime);
    expect(component.find('p').text()).to.contain(text2);
    expect(component.find('label').exists()).to.equal(true);
    expect(component.find('label').text()).to.equal(label1);
    expect(component.find('div').hasClass('ost-text-primary')).to.equal(true);
  });

  it('should have success style and changed label', async function() {
    component.setProps({ label: label2, type: 'success' });
    await defer(perTime);
    expect(component.find('label').text()).to.equal(label2);
  });

  it('should have no label', async function() {
    component.setProps({ label: null });
    await defer(perTime);
    expect(component.find('label').exists()).to.equal(false);
  });

  it('should have multiLine off', async function() {
    component.setProps({ multiLine: false, type: 'warning' });
    await defer(perTime);
    expect(component.find('p').hasClass('ost-text-single-line')).to.equal(true);
  });

  it('should have multiLine get and lg size', async function() {
    component.setProps({ multiLine: true, type: 'success', size: 'lg' });
    await defer(perTime);
    expect(component.find('p').hasClass('ost-text-single-line')).to.equal(false);
    expect(component.find('div').hasClass('ost-text-lg')).to.equal(true);
    expect(component.find('div').hasClass('ost-text-success')).to.equal(true);
  });

  it('should have xl size', async function() {
    component.setProps({ multiLine: true, type: 'success', size: 'xl' });
    await defer(perTime);
    expect(component.find('div').hasClass('ost-text-xl')).to.equal(true);
  });

  it('recover label', async function() {
    component.setProps({ label: label2 });
    await defer(perTime);
    expect(component.find('label').exists()).to.equal(true);
    expect(component.find('label').text()).to.equal(label2);
  });

  it('remove label', async function() {
    component.setProps({ label: null });
    await defer(perTime);
    expect(component.find('label').exists()).to.equal(false);
  });
});
