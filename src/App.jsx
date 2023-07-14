import React, { useState, useEffect } from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import City from './components/main/city/City';
import Car from './components/main/car/Car';
import Background from './components/background/Background';
import Login from './components/login/Login';
import Radio from './components/radio/Radio';
import LandPrompt from './components/landPrompt/LandPrompt';

function App () {
  const [navContent, setNavContent] = useState(infoDefault);
  const [screenTransition, setscreenTransition] = useState('beyondScreen');
  const [showSignIn, setShowSignIn] = useState(true);
  const [userName, setUserName] = useState('');
  const [radioButton, setRadioButton] = useState(false);
  const [radioOn, setRadioOn] = useState(false);
  const [radioSwitch, setRadioSwitch] = useState(false)
  const [vertical, setVertical] = useState(true);
  const [initialCheck, setInitialCheck] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 550) {
        setVertical(false);
      } else {
        setVertical(true);
      }
    }

    if (initialCheck) {
      handleResize(); 
      setInitialCheck(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[vertical]);

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setShowSignIn(false);
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    const audioElement = new Audio("https://stream.nightride.fm/chillsynth.m4a");
    audioElement.volume = 0.15;

    if (radioSwitch) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.currentTime = 0; 
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [radioSwitch]);
  

  const toggleRadio = () => {
    setRadioOn(!radioOn);
  };

  const handleSignIn = (name) => {
    setShowSignIn(false);
    setUserName(name)
  };

  useEffect(() => {
    const screenTimer = setTimeout(() => {
      setscreenTransition('middleScreen')
    }, !radioButton ? 200000000 : 2000);

    return () => {
      clearTimeout(screenTimer)
    }
  }, [radioButton]);


  const updateNavContent = (newContent) => {
    setNavContent(newContent);
  };

  const handleRadioToggle = (radioState) => {
    setRadioButton(radioState);
  };
  
  return (
    <>
      <body className={`beyondScreen ${screenTransition}`}>
        <Background signInState={radioButton} userName={userName}/>

        <main>
         <City updateNavContent={updateNavContent} />
          <Car signInState={radioButton} onToggleRadio={toggleRadio} setRadioSwitch={setRadioSwitch} radioSwitch={radioSwitch}/>
         </main>

        {showSignIn ? (
          <Login onSignIn={handleSignIn} />
        ) : (

          !radioButton ? (
            <Radio  radioButton={radioButton} onRadioToggle={handleRadioToggle} setRadioSwitch={setRadioSwitch}/>
          ) :

          <>
            <nav>
              <Nav
                content={navContent}
                updateNavContent={updateNavContent}
                newContent={infoDefault}
              />
            </nav>
          </>
        )}
      </body>
    </>
  );
}

export default App;



const infoDefault = `With a passion for coding that has been ignited since childhood, I am thrilled to finally have the opportunity to pursue my dream career.
\n\n
While I graduated from law college in Tuzla, I quickly realized that my true calling lies in the world of coding. It all started when I watched the Matrix movies for the first time, and from that moment on, I became captivated by the endless possibilities of programming. However, life took me on a different path until now, and I am determined to make the switch and fully immerse myself in the world of front-end development.
\n\n
In addition to my academic background, I have also accumulated valuable experience as a sales manager over the past six years. This role has allowed me to refine my business acumen and gain expertise in various business models and entrepreneurship. Moreover, it has sharpened my soft skills through daily communication and collaboration with a diverse range of individuals.
\n\n
I am confident that my unique background, coupled with my passion for coding and strong business sense, make me a valuable asset to any team`