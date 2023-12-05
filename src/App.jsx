import { useState, useEffect } from 'react';
import './App.css'
import file from './data.json'
import mercury from './images/planet-mercury.svg'
import venus from './images/planet-venus.svg'
import earth from './images/planet-earth.svg'
import mars from './images/planet-mars.svg'
import jupiter from './images/planet-jupiter.svg'
import saturn from './images/planet-saturn.svg'
import uranus from './images/planet-uranus.svg'
import neptune from './images/planet-neptune.svg'
import mercuryInternal from './images/planet-mercury-internal.svg'
import venusInternal from './images/planet-venus-internal.svg'
import earthInternal from './images/planet-earth-internal.svg'
import marsInternal from './images/planet-mars-internal.svg'
import jupiterInternal from './images/planet-jupiter-internal.svg'
import saturnInternal from './images/planet-saturn-internal.svg'
import uranusInternal from './images/planet-uranus-internal.svg'
import neptuneInternal from './images/planet-neptune-internal.svg'
import mercuryGeology from './images/geology-mercury.png'
import venusGeology from './images/geology-venus.png'
import earthGeology from './images/geology-earth.png'
import marsGeology from './images/geology-mars.png'
import jupiterGeology from './images/geology-jupiter.png'
import saturnGeology from './images/geology-saturn.png'
import uranusGeology from './images/geology-uranus.png'
import neptuneGeology from './images/geology-neptune.png'

function App() {

  let [planetNumber, setPlanetNumber] = useState(0);
  let [chapterName, setChapterName] = useState("overview");
  let [footerDisplay, setFooterDisplay] = useState('flex');
  let [mainColor, setMainColor] = useState('#419EBB');
  let [burger, setBurger] = useState(
    ['none', 'flex']
  );
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => { setScreenWidth(window.innerWidth); });
    return () => {
      window.removeEventListener('resize', () => { setScreenWidth(window.innerWidth); });
    };
  }, []); 


  const imageFunc = () => {
    if (planetNumber === 0) {
      if (chapterName === 'overview') {
        return mercury
      } else if (chapterName === 'structure') {
        return mercuryInternal
      } else {
        return mercuryGeology
      }
    } else if (planetNumber === 1) {
      if (chapterName === 'overview') {
        return venus
      } else if (chapterName === 'structure') {
        return venusInternal
      } else {
        return venusGeology
      }
    }else if (planetNumber === 2) {
      if (chapterName === 'overview') {
        return earth
      } else if (chapterName === 'structure') {
        return earthInternal
      } else {
        return earthGeology
      }
    }else if (planetNumber === 3) {
      if (chapterName === 'overview') {
        return mars
      } else if (chapterName === 'structure') {
        return marsInternal
      } else {
        return marsGeology
      }
    }else if (planetNumber === 4) {
      if (chapterName === 'overview') {
        return jupiter
      } else if (chapterName === 'structure') {
        return jupiterInternal
      } else {
        return jupiterGeology
      }
    }else if (planetNumber === 5) {
      if (chapterName === 'overview') {
        return saturn
      } else if (chapterName === 'structure') {
        return saturnInternal
      } else {
        return saturnGeology
      }
    }else if (planetNumber === 6) {
      if (chapterName === 'overview') {
        return uranus
      } else if (chapterName === 'structure') {
        return uranusInternal
      } else {
        return uranusGeology
      }
    } else {
      if (chapterName === 'overview') {
        return neptune
      } else if (chapterName === 'structure') {
        return neptuneInternal
      } else {
        return neptuneGeology
      }
    }
  }


  const borderFunc = () => {
    return '4px solid '+ mainColor
  }

  const planetClicked = (number) => {
    if (number === 0) {
      setMainColor('#419EBB')
    } else if (number === 1) {
      setMainColor('#EDA249')
    }else if (number === 2) {
      setMainColor('#6D2ED5')
    }else if (number === 3) {
      setMainColor('#D14C32')
    }else if (number === 4) {
      setMainColor('#D83A34')
    }else if (number === 5) {
      setMainColor('#CD5120')
    } else if(number === 6){
      setMainColor('#1EC1A2')
    } else {
      setMainColor('#2D68F0')
    }
    setPlanetNumber(number);
    if (screenWidth < 768) {
      setBurger(burger[0] === 'none' ?  ['flex', 'none'] : ['none', 'flex']);
    }
    setChapterName('overview');
    setFooterDisplay('flex')
  }

  const getInfo = () => {
    if (chapterName === 'overview') {
      return file[planetNumber].overview.content
    } else if (chapterName === 'structure') {
      return file[planetNumber].structure.content
    }
    else {
      return file[planetNumber].geology.content
    }
  }

  const getLink = () => {
    if (chapterName === 'overview') {
      return file[planetNumber].overview.source
    } else if (chapterName === 'structure') {
      return file[planetNumber].structure.source
    }
    else {
      return file[planetNumber].geology.source
    }
    
  }

  
 

  return (
    <div className='container'>
      <div className="nav">
        <div className="head">
        <h2 className="title">THE PLANETS</h2>
          {screenWidth < 768 ? <svg onClick={() => {
            setBurger(burger[0] === 'none' ? ['flex', 'none'] : ['none', 'flex'])
            setFooterDisplay(footerDisplay === 'flex' ? 'none' : 'flex')
           
          } } xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
        : null}
          
        </div>
        <div className="planets" style={{ display: screenWidth > 767 ? 'flex' : burger[0] }}>
          <div className="planet-list">
            <div className="planet" onClick={() => {planetClicked(0)}}>
              <div className='planet-child'>
                <div className='circle mercury'></div>
                <div className="planet-names" onClick={() => {planetClicked(0)}}>Mercury</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(1)}}>
              <div className='planet-child'>
                <div className='circle venus'></div>
                <div className="planet-names" onClick={() => {planetClicked(1)}}>venus</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(2)}}>
              <div className='planet-child'>
                <div className='circle earth'></div>
                <div className="planet-names" onClick={() => {planetClicked(2)}}>earth</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(3)}}>
              <div className='planet-child'>
                <div className='circle mars'></div>
                <div className="planet-names" onClick={() => {planetClicked(3)}}>mars</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(4)}}>
              <div className='planet-child'>
                <div className='circle jupiter'></div>
                <div className="planet-names" onClick={() => {planetClicked(4)}}>jupiter</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(5)}}>
              <div className='planet-child'>
                <div className='circle saturn'></div>
                <div className="planet-names" onClick={() => {planetClicked(5)}}>saturn</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>

            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(6)}}>
              <div className='planet-child'>
                <div className='circle uranus'></div>
                <div className="planet-names" onClick={() => {planetClicked(6)}}>uranus</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>


            <div className='middle-line'></div>

            <div className="planet" onClick={() => {planetClicked(7)}}>
              <div className='planet-child'>
                <div className='circle neptune'></div>
                <div className="planet-names" onClick={() => {planetClicked(7)}}>neptune</div>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg></div>
            </div>
          </div>
        </div>  
      </div>
      
      
      {screenWidth < 768 ? 
        <div className="content" style={{display: burger[1]}}>
          <div className="infos" style={{ border: screenWidth > 768 ? 'none': ''}}> 
            <h3 className='overview' style={{borderBottom: chapterName === 'overview' ? borderFunc() : 'none'}} onClick={() => {
              setChapterName('overview')
            }}>OVERVIEW</h3>
            <h3 className='structure' style={{borderBottom: chapterName === 'structure' ? borderFunc() : 'none'}} onClick={() => {
              setChapterName('structure')
            }}>STRUCTURE</h3>
            <h3 className='geology' style={{borderBottom: chapterName === 'geology' ? borderFunc() : 'none'}} onClick={() => {
              setChapterName('geology')
            }}>SURFACE</h3>
          </div>
          <div className="image">
            <img src={imageFunc()} alt="" />
          </div>
          <div className="text">
            <h2 className="planet-name">{file[planetNumber].name }</h2>
            <p>
              {getInfo()}
            </p>
            <span>Source: <a href={getLink()}>Wikipedia <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg></a></span>
          </div>  
        </div>
        : 
        <div className="content">
          <div className="image">
            <img src={imageFunc()} alt="" />
          </div>
          <div className="middle">
            <div className="text">
              <h2 className="planet-name">{file[planetNumber].name }</h2>
              <p>
                {getInfo()}
              </p>
              <span>Source: <a href={getLink()}>Wikipedia <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg></a></span>
            </div>
            <div className="infos">
              <h3 className='overview' style={{backgroundColor: chapterName === 'overview' ? mainColor : null}} onClick={() => {
                setChapterName('overview')
              }}>01 OVERVIEW</h3>
              <h3 className='structure' style={{backgroundColor: chapterName === 'structure' ? mainColor : null}} onClick={() => {
                setChapterName('structure')
              }}>02 INTERNAL STRUCTURE</h3>
              <h3 className='geology' style={{backgroundColor: chapterName === 'geology' ? mainColor : null}} onClick={() => {
                setChapterName('geology')
              }}>03 SURFACE GEOLOGY</h3>
            </div>
          </div>
        </div>
    }
     
          <div className="footer" style={{display: footerDisplay}}>
            <div className="footer-child">
              <h3>ROTATION TIME</h3>
              <h2>{file[planetNumber].rotation }</h2>
            </div>
            <div className="footer-child">
              <h3>REVOLUTION TIME</h3>
              <h2>{file[planetNumber].revolution }</h2>
            </div>
            <div className="footer-child">
              <h3>RADIUS</h3>
              <h2>{file[planetNumber].radius }</h2>
            </div>
            <div className="footer-child">
              <h3>AVERAGE TEMP.</h3>
              <h2>{file[planetNumber].temperature }</h2>
            </div>
          </div>
    </div>
  )
}

export default App;