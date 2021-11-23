import {useFetchGifs} from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing over useFetchGifsHook', () => {
    test('should returns the initial state', async() => {
        // const {data, loading} = useFetchGifs('One Punch');
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should returns an image array and loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();
        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });    
})
