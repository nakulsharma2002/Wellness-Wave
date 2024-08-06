import React, { useEffect, useRef, useState } from 'react';
import { meditation_Music } from '../Meditation_Music';

function MusicPlayer() {
  return (
    <>
        <h1>Music Player</h1>
        <div style={{display:'flex',width:'1520px',margin:'auto',maxWidth:'1303px',height:'auto'}}>
            {meditation_Music.map((v) => (
                <Show_Music prop={v} key={v.id} />
            ))}
        </div>
    </>
 
  );
}

export default MusicPlayer;

function Show_Music({ prop }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const button = buttonRef.current;

    const handleMouseOver = () => {
      button.style.visibility = 'visible';
    };
    const handleMouseOut = () => {
      button.style.visibility = 'hidden';
    };

    if (img) {
      img.addEventListener('mouseover', handleMouseOver);
      img.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      if (img) {
        img.removeEventListener('mouseover', handleMouseOver);
        img.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    

      <div className="card" style={{width: '18rem', border: 'none', padding: '10px 7px' }}>
        <audio ref={audioRef} src={prop.src} loop />
        <div style={{height:'276px'}} ref={imgRef}>
            <div style={{ height: '45px' }}  >
              <img
                src={prop.image}
                className="card-img-top"
                style={{ borderRadius: '19px', height: '248px' }}
                alt="..."
                
                />
            </div>
        <div style={{ paddingLeft: '104px', paddingTop: '45px', display: 'flex', paddingBottom: '100px' }} >
          <button onClick={handlePlayPause} style={{ visibility: 'hidden' }} ref={buttonRef}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="card-body">
          <p className="card-text" style={{ textAlign: 'center', fontFamily:'monospace' }}>
            {prop.text}
          </p>
        </div>
        </div>
      </div>
 
    </>
  );
}
