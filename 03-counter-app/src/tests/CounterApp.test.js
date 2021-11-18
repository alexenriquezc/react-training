import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';


describe('Pruebeas en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp/>);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp/>);
    });

    test('should shows <CounterApp/> successfuly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should displays 100 as default value', ()=> {
        const value = 100;
        const wrapper = shallow(
            <CounterApp 
                value={value}
            />
        );

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

    });

    test('should increment the counter with the + button', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });
    
    test('should decrement the counter with the - button', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('should place default value with the reset button', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');

    });
})
