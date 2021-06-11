import React from 'react';
import ReactDOM from 'react-dom';
//import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs';


describe(`Tabs Component`, () => {

    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
    ];

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    /* Note: There's a quirk with the key prop being shown in snapshots from Jest, so just press u again to update the snapshots. */

    it('renders the first tab by default', () => {
        /* Pre-intro of Enzyme, using renderer... */
        //const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
        //expect(tree).toMatchSnapshot()

        /* Now WITH Enzyme... */
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)

        /* In Enzyme wrappers, we can use the find method and pass in a string. The string should be the same as a CSS selector.
           -----
           There's a useful method on Enzyme wrappers that we can use to see the HTML for what we currently have selected, called debug.
           We can do a debug before and after the find to see what happens.
        
        console.log('>>> WRAPPER <<<')
        console.log(wrapper.debug())
        console.log('>>> FIND(BUTTON) <<<')
        console.log(wrapper.find('button').at(1).debug())
        //console.log(wrapper.find('button').debug())
        */

        /* To simulate clicking the button, we use the .simulate() method and give it a string
           as an event type, in this case 'click'. Then we can take a new snapshot after simulating
           the click.
        */
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})
