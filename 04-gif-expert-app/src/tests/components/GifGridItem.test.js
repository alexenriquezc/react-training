import { GifGridItem } from "../../components/GifGridItem"
import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

describe('Testing GifGridItem Componetn', () => {
    const title = 'test';
    const url = 'http://localhost'; 
    const wrapper = shallow(<GifGridItem url={url} title={title}/>);
    
    test('should displays component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should has a paragraph with the title', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text().trim()).toBe(title);
    });

    test('should  obtains img equals to url and alt', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('should has animate__fadeIn', () => {
        const div = wrapper.find('div');
        const hasClass = div.hasClass('animate__fadeIn');
        expect(hasClass).toBe( true );

        // const className = div.prop('className');
        // expect(className.includes('animate__fadeIn')).toBe( true );
    })
    
    
    
})
