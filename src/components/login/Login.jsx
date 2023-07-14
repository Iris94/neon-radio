import React, { useState, useEffect } from "react";
import "./login.css";
import keyboardSound from '../../assets/keyboard.mp3'


function Login({ onSignIn }) {
  const [name, setName] = useState("");
  const [activeKey, setActiveKey] = useState(null);

  const clickSound = new Audio(keyboardSound);

  const handleKeyClick = (letter) => {
    setActiveKey(letter);
    clickSound.play()
    clickSound.currentTime = 0
    clickSound.volume = 0.10
  };

  const handleKeyPress = (event) => {
    const pressedKey = event.key.toUpperCase();
    setActiveKey(pressedKey);
    clickSound.play()
    clickSound.currentTime = 0
    clickSound.volume = 0.10
  };

  const keys = Array.from({ length: 26 }, (_, index) => {
    const letter = String.fromCharCode(65 + index);
    const isPressed = letter === activeKey;

    return (
      <div
        key={index}
        className={`keys ${isPressed ? "animate-key" : ""}`}
        onClick={() => handleKeyClick(letter)}
      >
        {letter}
      </div>
    );
  });

  const handleAnimationEnd = () => {
    setActiveKey(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSignIn = () => {
    onSignIn(name); 
    clickSound.play()
    clickSound.currentTime = 0
    clickSound.volume = 0.10
  };

  return (
    <div className="login__container">
      <div className="login__box">
        <div className="screen__box">
          <label htmlFor="name">Enter Your Name:</label>
          <input
            className="input-box"
            type="text"
            id="name"
            placeholder="Click here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
          <button className="button-box" onClick={handleSignIn} disabled={name.length === 0}>start</button>
        </div>

        <div className="keyboard__box" onAnimationEnd={handleAnimationEnd}>
          {keys}
        </div>
      </div>
    </div>
  );
}

export default Login;
