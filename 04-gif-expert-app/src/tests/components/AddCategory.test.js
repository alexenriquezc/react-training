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
        
    test("shouldn't post form info", () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call setCategoties and clear input text', () => {
        const value = "Hola Mundo";

        //1. Simulate input Change
        wrapper.find('input').simulate('change', { target: { value } } );

        //2. Simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        //3. setCategories should be called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //4. the input value should be '' 
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
})
    