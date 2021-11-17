const apiKey = 'NzfsgwuUHuPGCqsHgMW7sHKVmdNsTBmG';
const giphyUrl = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const request = fetch(giphyUrl);

// request.then(res => console.log(res.json()));
request
.then(res => res.json())
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(url);
})
.catch(console.error);
