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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className='form'>
        <input
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          className='form-input'
          type='text'
          placeholder='Top text'
        />
        <input
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          className='form-input'
          type='text'
          placeholder='Bottom text'
        />
        <button onClick={getMemeImage} className='form-button' type='submit'>
          Get a new meme image
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt='meme' className='meme-image' />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
