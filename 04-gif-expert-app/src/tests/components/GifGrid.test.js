import { GifGrid } from "../../components/GifGrid"
import { shallow } from 'enzyme';
import React from "react";
import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Testing on <GifGrid/>', () => {

    const category = 'Samurai X';
    // let wrapper = shallow( <GifGrid category={category}/>);

    test('should shows correctly', () => {
        const wrapper = shallow( <GifGrid category={category}/>);
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        expect(wrapper).toMatchSnapshot();
    });

    test('should shows items when images are loading useFetch', () => {

        const gifs = [{
            id: 'ABC',
            url: 'http://localhost',
            title: 'something'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}/>);

    })
    
    
})
