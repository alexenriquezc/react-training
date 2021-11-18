import { shallow } from 'enzyme';
import React from 'react';
import {AddCategory} from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Testing in <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    });
    
    test('should shows correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('input text shoud changes', () => {
        const textInput = wrapper.find('input');
        const value = "Hola Mundo";
        textInput.simulate('change', { target: { value } } );

        expect(wrapper.find('p').text().trim()).toBe(value);
    });        
        
    test("shouldn't post info", () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
})
    