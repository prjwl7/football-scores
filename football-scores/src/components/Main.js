import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'

//LOGOS
import MU from '../assets/Manchester_United_FC_crest.svg.png'
import MC from '../assets/city.png'
import chelsea from '../assets/chelsea.png'
import liverpool from '../assets/lvp.webp'
import rm from '../assets/rm.png'
import barca from '../assets/barcelona.png'
import atm from '../assets/atmadrid.png'
import acmilan from '../assets/Logo_of_AC_Milan.svg.png'
import inter from '../assets/napoli.png'
import psg from '../assets/psg.png'
import arsenal from '../assets/arsenal.png'
import juventus from '../assets/juventus1.png'

//Functions
const Main = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();
  const manchesterunited = () =>{
    navigate('./ManchesterUnited')
  }
  //Fetching data
  const fetchData = () => {
    fetch('http://localhost:5000/api/matches')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMatches(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const buttonToggle = () =>{
    var button = document.getElementById("theme");
    button.classList.toggle('clicked');
    var body = document.body;
    body.classList.toggle('clicked');
    var score = document.getElementById('score');
    score.classList.toggle('clicked');
  }
  const addData = () =>{
    navigate('./addMatch')
  }
  return (
    <div className='container'>
        <div className="navBar">
          <div className="navBar-buttons">
            <button className="add" onClick={addData}>ADD MATCHES</button>
            <button className="theme" id='theme' onClick={buttonToggle}><FontAwesomeIcon icon={faSun} fontSize={20} color='white'/>
            <FontAwesomeIcon icon={faCloudMoon} fontSize={20}  />
            </button>
          </div>
        </div>
        <div className="leftcontent">
          <div className="favTeamHeading">POPULAR TEAMS</div>
          <div className="teamLogos">
            <div className="team1" onClick={manchesterunited}><img src={MU} alt="" /></div>
            <div className="team2"onClick={manchesterunited}><img src={rm} alt="" /></div>
            <div className="team3"onClick={manchesterunited}><img src={psg} alt="" /></div>
            <div className="team4"onClick={manchesterunited}><img src={barca} alt="" /></div>
            <div className="team5"onClick={manchesterunited}><img src={arsenal} alt="" /></div>
            <div className="team6"onClick={manchesterunited}><img src={juventus} alt="" /></div>
            <div className="team7"onClick={manchesterunited}><img src={acmilan} alt="" /></div>
            <div className="team8"onClick={manchesterunited}><img src={inter} alt="" /></div>
            <div className="team9"onClick={manchesterunited}><img src={atm} alt="" /></div>
            <div className="team10" onClick={manchesterunited}><img src={MC} alt="" /></div>
            <div className="team11" onClick={manchesterunited}><img src={chelsea} alt="" /></div>
            <div className="team12" onClick={manchesterunited}><img src={liverpool} alt="" /></div>
          </div>
        </div>
        <div className="rightcontent">
          <div className="rightContentHeading">POPULAR MATCHES FROM AROUND THE WORLD</div>
          <div className="match">
          <ul className="matchesList">
  {matches.map((match) => (
    <li key={match._id} className='dataMatches'>
      <span className="teamName">{match.team1}</span>
      <span className="score" id='score'>{match.score1}</span>
      <span className="separator">:</span>
      <span className="score" id='score'>{match.score2}</span>
      <span className="teamName">{match.team2}</span>
    </li>
  ))}
</ul>
</div>
          <div className="match">{}</div>
          <div className="match">{}</div>
          <div className="match">{}</div>
          <div className="match">{}</div>
        </div>
    </div>
  )
}

export default Main