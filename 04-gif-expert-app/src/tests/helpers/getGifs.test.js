import { getGifs } from "../../helpers/getGifs"

describe('Testing with getGifs Fetch', () => {
    test('should returns 10 elements', async() => {
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('should returns 0 elements', async() => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
    
})
