import React, {useState, useEffect} from "react";
import './city.css'
import scanSound from '../../../assets/scan.mp3'

function City ({ updateNavContent }) {
    const [cityLights, setcityLights] = useState(false)

    const scan = new Audio(scanSound)

    useEffect(() => {
        const cityTimer = setTimeout(() => {
            setcityLights(true)
        }, 21000);

    return () => {
        clearTimeout(cityTimer)
    }
    })

    function neons (val) {
        return Array.from({ length: val }, (_, index) => (
            <div key={index}></div>
          ))
    }  

    const handleScanTechnology = () => {
        updateNavContent(infoTechnology);
        scan.play()
        scan.currentTime = 0
        scan.volume = 10
      };

    const handleScanFutureWork = () => {
        updateNavContent(infoFutureWork)
        scan.play()
        scan.currentTime = 0
        scan.volume = 10
    }

    const handleScanProjects = () => {
        updateNavContent(infoProjects)
        scan.play()
        scan.currentTime = 0
        scan.volume = 10
    }

    return (
        <div className="city__space">
            <div className="bld1"> {neons(7)} </div>
            <div className="bld2"> {neons(28)}</div>
            <div className="bld3"> {neons(7)} </div>
            <div className="bld4"> {neons(2)} </div>
            <div className="bld5"> <div className={cityLights ? 'colorAnima' : ''} ></div> </div>

            <div className="bld6">
            <div className="graph-part" onClick={handleScanTechnology}>
                    Scan for technologies
                </div>
            </div>


            <div className="bld7">
                <div className="graph-part" onClick={handleScanFutureWork}>
                    Scan for future work
                </div>
                <div className="bld7-door">
                    {neons(1)}
                </div>
            </div>

            <div className="bld8">
                {neons(8)}
            </div>

            <div className="bld9">
                <div className="sign">
                    <div className="sign-letter">
                        <span className={cityLights ? 'flickerSign' : ''}>Neon Dreams</span>
                    </div>
                    <div className="legs1"></div>
                    <div className="legs2"></div>
                </div>
                <div className="sign-bld">
                <div className="graph-part" onClick={handleScanProjects}>
                    Scan for Projects
                </div>
                <div>
                </div>
                </div>
            </div>

            <div className="bld10"> {neons(3)} </div>
            <div className="bld11"> {neons(1)} </div>
            <div className={`bld12`}>
                <div className={cityLights ? 'flicker12' : ''}></div>
                <div className={cityLights ? 'flicker12' : ''}></div>
            </div>
        </div>
    )
}

export default City;


const infoTechnology = (
    <p>
      The technologies I currently use include
      <span className="neon__text">HTML, CSS, Bootstrap, Sass, JavaScript, and React.</span>
      I have a strong proficiency in vanilla JavaScript because I firmly believe that grasping the fundamentals of how things work under the hood is crucial before diving into frameworks. Additionally, I have invested a significant amount of time in understanding CSS, as it provides me with greater control over frameworks, although I can leverage them when necessary. For this particular project, I have developed it entirely in React with pure CSS.
    </p>
  );

const infoFutureWork = (
    <p>
    My future plans revolve around mastering web development with a focus on vanilla JavaScript and React. Additionally, I have a strong desire <span className="neon__text">to learn either Vue or Angular, as well as Svelte</span>, as I believe these technologies will have a significant impact in the future. In terms of education, I am considering enrolling in either an applied mathematics or computer science program at the college level. While I currently hold a college diploma in law, I am eager to pursue another degree in a field that aligns more closely with my passion for coding. Looking beyond web development and into the distant future, <span className="neon__text">I have a keen interest in exploring languages such as COBOL, Assembly, and Ada.</span>
    </p>
  );

 const infoProjects = (
    <p>
    Besides this portfolio, I have two interesting projects that I would like to share with you. The first project is a Tetris game:<span className="neon__text"> https://iris94.github.io/Tetris/</span> that I developed in my own unique way. I am passionate about exploring innovative approaches, and my version of Tetris showcases my creativity and problem-solving skills. I implemented it using vanilla JavaScript, and it demonstrates my interest in creating new algorithms. The second project is a web application that calculates inheritance distribution in Bosnia and Herzegovina following the passing of an individual. This project combines elements of mathematics and law, and it involves complex DOM manipulation and precise calculations. I take great pride in this project because it addresses a niche area that requires knowledge in both law and coding:<span className="neon__text"> https://iris94.github.io/Law-Project/</span>
    </p>
);
  