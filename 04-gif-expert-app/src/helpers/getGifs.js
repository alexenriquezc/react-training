
export const getGifs = async( category ) => {
    const apiKey = 'NzfsgwuUHuPGCqsHgMW7sHKVmdNsTBmG';
    const limit = 10;
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limit}&api_key=${apiKey}`;
    
    const result = await fetch(giphyUrl)
    const { data } = await result.json();
    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
}