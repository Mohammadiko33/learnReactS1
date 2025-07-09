import React, { Component } from 'react'
import './full.css'

export default class Fulllcss extends Component {
  render() {
    return (
      <div className='mainMenu'>
        <h1 className="mainMenuHeaderTitle" style={{color: "#fff", fontSize: "1.6rem" , textAlign: "center"}}>Main Menu</h1>
        <ul className="listMainMenu">
         <li className="listMainMenuItem">Mission Menu</li>
         <li className="listMainMenuItem">Settings</li>
         <li className="listMainMenuItem">Player</li>
         <li className="listMainMenuItem">Objectives</li>
         <li className="listMainMenuItem">Actors</li>
         <li className="listMainMenuItem">Cars</li>
         <li className="listMainMenuItem">Pickups</li>
         <li className="listMainMenuItem">Objects</li>
         <li className="listMainMenuItem">Tools</li>
        </ul>
      </div>
    )
  }
}