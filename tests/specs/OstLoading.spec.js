import React from 'react';
import { OstLoading } from 'components';
import { mount } from 'enzyme';

export default describe('OstLoading test', function() {

  beforeEach(function() {
    this.component = mount(<OstLoading isLoading />);  
  });

  it('should have a element whose classname is `ost-loading` ', function() {
    expect(this.component.find('.ost-loading')).to.have.lengthOf(1);
  });
})