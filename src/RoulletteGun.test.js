import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RouletteGun from './RoulletteGun'

describe(`RouletteGun Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RouletteGun bulletInChamber={4} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  
  //it.skip('renders the UI as expected', () => {
  it('renders the UI as expected', () => {
    expect(
      renderer.create(<RouletteGun bulletInChamber={4} />).toJSON()
    ).toMatchSnapshot()
  })
})