import { useState } from 'react'
import './App.css'

function App() {
  const [pos, setPos] = useState({ top: 400, left: 400 });
  const [clicked, setClicked] = useState(false); 


  const moveButton = () => {
    const newTop = Math.random() * 300;
    const newLeft = Math.random() * 400;

    setPos({ top: newTop, left: newLeft });
  };

  const handleClick = () => {
    setClicked(true);
  };

  // Generate array of hearts with random properties
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // Random horizontal position (%)
    delay: Math.random() * 2, // Random delay (seconds)
    duration: 3 + Math.random() * 2, // Random fall duration (3-5 seconds)
  }));

  return (
    <div className={clicked ? 'container container-expanded' : 'container'}>
      {clicked && (
        <div className="hearts-container">
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}
      
      <div className='header'> <img 
      style={{ width: '100px', height: 'auto' }}
          src="../public/apple.png"

        /></div>
      <h1 className='header2'>{clicked ? 'LETS GOOOOOOOO!!!' : 'Dear Elsa,'}</h1>
      <h1 className='header3'>{clicked ? '😜😜😜😜' : 'will you be my valentine?'}</h1>

    <div>
    {clicked ? (
        <img 
        key={Date.now()}
          src="../public/giff.gif"
          alt="Celebration" 
          className='celebration-gif'
        />
      ) : (
        <>
          <button className='button' onClick={handleClick}>
            Yes
          </button>

          <button
            className='button2'
            onMouseEnter={moveButton}
            style={{ top: pos.top, left: pos.left }}
          >
            No
          </button>
        </>
      )}
    </div>
      
    </div>
  );
}

export default App;