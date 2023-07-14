import React, { useEffect, useState } from 'react';
import './car.css';
import carStopAudio from '../../../assets/carStop.wav';
import carDriveAudio from '../../../assets/carDrive.wav';

function Car({ signInState, setRadioSwitch, radioSwitch }) {
  const [carPosition, setCarPosition] = useState('beyond');
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [message, setMessage] = useState(true);

  const drive = new Audio(carDriveAudio);
  const stop = new Audio(carStopAudio);

  const toggleRadio = () => {
    setRadioSwitch(!radioSwitch);
  };

  useEffect(() => {
    let driveTimer;

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, !signInState ? 20000000 : 18000);

    const animationTimer = setTimeout(() => {
      setCarPosition('middle');
    }, !signInState ? 20000000 : 2000);

    const hideMessage = setTimeout(() => {
      setMessage(false);
    }, !signInState ? 20000000 : 35000);

    if (carPosition === 'beyond') {
      drive.play()
      drive.volume = 0.15

      driveTimer = setTimeout(() => {
        drive.pause()
        drive.currentTime = 0;

        stop.play()
        stop.volume = 0.10
      }, 18000);
    } 

    return () => {
      clearTimeout(transitionTimer)
      clearTimeout(animationTimer);
      clearInterval(hideMessage);
      clearInterval(driveTimer)
    };
  }, [signInState]);


  return (
    <div className="car__space">
    <div className='car__container'>
      <div className={`car ${carPosition}`}>
        <div className="car-front" onClick={toggleRadio}></div>
        <div className="car-top" onClick={toggleRadio}>
          <div className="car-windows">
            <div></div>
            <div></div>
          </div>
          <div className="car-doors">
            <div className='car-doors-radio'>{radioSwitch ? 'ON' : 'OFF'}</div>
            <div></div>
          </div>
        </div>
        <div className="car-back" onClick={toggleRadio}></div>
        <div className="car-bottom"></div>
        <div className="car-wheels">
            <div className={`rims ${(isTransitioning && signInState) ? 'rotate' : ''}`}>
            <div></div>
            </div>
            <div className={`rims ${(isTransitioning && signInState) ? 'rotate' : ''}`}>
            <div></div>
            </div>
        </div>
        {isTransitioning ? null : (
        <>
        <div className={`bubble ${message ? null : 'hide'}`}>
        You should scan graffiti on different buildings to reveal more information
        </div>
        <div className={`bubble-line ${message ? null : 'hide'}`}></div>
        </>
          )}

      </div>
      </div>
    </div>
  );
}

export default Car;
