import { useState } from 'react';
import memesData from '../memesData';

function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memes = allMemeImages.data.memes;
    const meme = memes[Math.floor(Math.random() * memes.length)];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: meme.url,
      };
    });
  }

  return (
    <main>
      <div className='form'>
        <input className='form-input' type='text' placeholder='Top text' />
        <input className='form-input' type='text' placeholder='Bottom text' />
        <button onClick={getMemeImage} className='form-button' type='submit'>
          Get a new meme image
        </button>
      </div>
      {<img src={meme.randomImage} alt='meme' className='meme-image' />}
    </main>
  );
}

export default Meme;
