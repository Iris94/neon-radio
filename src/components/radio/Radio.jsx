import React, {useState, useEffect} from "react";
import './radio.css'
import keyboardSound from '../../assets/keyboard.mp3'


function Radio({ onRadioToggle, setRadioSwitch}) {

    const keySound = new Audio(keyboardSound)

    const playRadioY = () => {
        onRadioToggle(true);
        setRadioSwitch(true)
        keySound.play();
        keySound.currentTime = 0;
        keySound.volume = 0.10
    };

    const playRadioN = () => {
        onRadioToggle(true);
        keySound.play();
        keySound.currentTime = 0;
        keySound.volume = 0.10
    };

    return (
        <div className="radio__container">
            <div className="radio">
                <div className="radio-text">
                    <p className="radio-text1">Would you like to start the radio? (recommended)</p>
                    <p className="radio-text2">You can toggle the radio by clicking on the car and switching it ON or OFF</p>
                    <span className="radio-check">
                        <button className="radio-check-Y" onClick={playRadioY} >Y</button>
                        <p className="radio-check-OR">/</p> 
                        <button className="radio-check-N" onClick={playRadioN}>N</button>
                    </span>
                </div>
                <div className="radio-shape">
                    <div className="tape">
                        <div className="tape-text">SynthWave cassette tape (NightRadio.FM)</div>
                        <div className="tape-holes">
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radio;