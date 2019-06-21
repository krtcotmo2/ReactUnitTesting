import React from 'react';
import App, { doIncrement, doDecrement } from '../src/App';
import CounterPiece from "../src/CounterPiece";

describe('ENZYME TEST App Component', () => {
    it('renders the indiviual separate Counter Piece on the screen', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CounterPiece)).to.have.length(1);
    });

    //CHECKING THE PASSED STATE
    it('passes all props to Counter wrapper', () => {
        //get app
        const wrapper = shallow(<App />);
        //finds component on app
        let counterWrapper = wrapper.find(CounterPiece);   
        //test to see if property passed from app to child
        expect(counterWrapper.props().stateValue.counter).to.equal(0);    
        
        //set the parent state counter to new value
        wrapper.setState({ counter: -1 });        
        //find component on the page  - must recall the child component to trigger the cascading down to full state with the new value
        counterWrapper = wrapper.find(CounterPiece);          
        //test to see if property passed from app to child
        expect(counterWrapper.props().stateValue.counter).to.equal(-1);
      });

      //CLICK EVENTS
      it('increments the counter by 2', () => {
        //get main app and set state value
        const wrapper = mount(<App />);
        wrapper.setState({ counter: 0 });
        //drill down to the desired button and sinluate the click twice
        wrapper.find(CounterPiece).find('button').at(0).simulate('click').simulate('click');
        //test to see if property passed from app to child
        expect(wrapper.state().counter).to.equal(2);
      });
      it('decrement the counter by 3', () => {
        //get main app and set state value
        const wrapper = mount(<App />);
        wrapper.setState({ counter: 7 });
        //drill down to the desired button and sinluate the click three times
        wrapper.find(CounterPiece).find('button').at(1).simulate('click').simulate('click').simulate('click');
        //test to see if property passed from app to child
        expect(wrapper.state().counter).to.equal(4);
      });
});