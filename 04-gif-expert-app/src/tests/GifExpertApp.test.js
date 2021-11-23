import { shallow } from 'enzyme';
import React from 'react';
import {GifExpertApp} from '../GifExpertApp';

describe('Testing in <GifExpertApp/>', () => {
    test('should shows correctly', () => {
        const wrapper = shallow( <GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should shows a category list', () => {
        const categories = ['One Punch', 'Dragon ball'];

        const wrapper = shallow( <GifExpertApp defaultCategories = { categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });   
    
})
