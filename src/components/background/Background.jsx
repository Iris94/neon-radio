import React, { useEffect, useState } from "react";
import './background.css'
import styled from 'styled-components';

function Background ({signInState, userName }) {
    const [synth, setSynth] = useState('beyondSynth')

    useEffect(() => {
        const synthTimer = setTimeout(() => {
          setSynth('middleSynth')
        }, !signInState ? 20000000 : 2000);
    
        return () => {
          clearTimeout(synthTimer)
        }
      });
    
    const numOfSquares = 30;

    const squares = Array.from({ length: numOfSquares * numOfSquares}, (_, index) => (
            <div key={index} className="square" >
                <div className="square-overlay" />
            </div>
    ))

    const GridContainer = styled.div `
      display: grid;
      grid-template-columns: repeat(${numOfSquares}, 1fr);
      grid-template-rows: repeat(${numOfSquares}, 1fr);
      width: 100%;
      height: 100%;
      background-color: transparent;
      overflow: hidden;
      transform: perspective(400px) rotateX(80deg);
      position: relative;
      z-index: -50;
      
      @media screen and (orientation: landscape) and (max-height: 420px) {
        bottom: -30%
      }
      `

    return (
        <div className={`background__container ${synth}`}>
            <GridContainer>
                {squares}
            </GridContainer>
            <div className="road"></div>
            <div className="userInfo">
              User: <span>{userName}</span>
            </div>
            <div className='sun'>
            </div>
        </div>
    )
}

export default Background;