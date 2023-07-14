import React, {useState, useEffect} from "react";
import './nav.css';
import ProfilePicture from './picture.jpg';
import scanSound from '../../assets/scan.mp3'
import turningOn from '../../assets/turnOn.mp3'

function Nav ({ content, updateNavContent, newContent}) {
    const [screen, setScreen] = useState(false);
    const [info, setInfo] = useState(false);

    const scan = new Audio(scanSound)
    const startTerminal = new Audio(turningOn)
    
    const handleScanHome = () => {
        updateNavContent(newContent)
        scan.play()
        scan.currentTime = 0
        scan.volume = 10
    }

    useEffect(() => {
        const showScreen = setTimeout(() => {
            setScreen(true)
            startTerminal.play()
            startTerminal.currentTime = 0;
            startTerminal.volume = 0.20
        }, 21000);

        const showInfo = setTimeout(() => {
            setInfo(true)
            scan.play()
            scan.currentTime = 0
            scan.volume = 10
        }, 22000);

        return () => {
            clearTimeout(showScreen)
            clearTimeout(showInfo)
        }
    }, [])

    return (
        <div className="nav__space">
            <div className="hold-screen"></div>
            <div className="hold__navigation"></div>
            <div className="home" onClick={handleScanHome}>
                Home
            </div>
            <div className={`bio__screen ${!screen ? null : 'bio__screen-animation'}`}>
                <div className={`mainInfo__screen ${!info ? null : 'revealInfo'}`}>
                    <div className="picture">
                        <img className="profile-picture" src={ProfilePicture} alt="profile"></img>
                        <p>Hajric Mirza (Iris)</p>
                    </div>
                    <div className="picture__info">
                        <ul className="picture__info-styling">
                            <li>Born: 1994</li>
                            <li>Age: 29</li>
                            <li>Country: Bosnia and Herzegovina</li>
                            <li>City: Tuzla</li>
                        </ul>
                    </div>
                </div>

                <div className={`mainSwitch__screen ${!info ? null : 'typing-animation'}`}>
                        <div>
                            {content}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
