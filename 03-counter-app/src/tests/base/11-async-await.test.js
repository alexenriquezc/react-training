import { getImage } from "../../base/11-async-await"

describe('Testing with async-await and fetch', () => {
    test('should return url of images', async() => {
        const url = await getImage();
        expect(url.includes('https://')).toBe(true);
    })    
    
})
