const getImage = async () =>{
    const apiKey = 'NzfsgwuUHuPGCqsHgMW7sHKVmdNsTBmG';
    const giphyUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    
    try {
        const response = await fetch(giphyUrl);
        const {data} = await response.json();
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
       console.error(error);
    }
};

getImage();