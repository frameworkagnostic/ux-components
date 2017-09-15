
import React from 'react';
import renderer from 'react-test-renderer';

const Div = (props) => {
  return (<div>testing</div>);
};

describe('server', () => {

  it('should have <button> element', () => {
    const component = renderer.create(<Div />);

    let tree = component.toJSON();
    console.log(tree);
  });

});
