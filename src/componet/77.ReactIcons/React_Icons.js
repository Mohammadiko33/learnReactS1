import React, { Component } from 'react'
import { GrCirclePlay } from "react-icons/gr";
import { TfiApple } from "react-icons/tfi";
import { VscSnake } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscSparkleFilled } from "react-icons/vsc";



import './React_icons.css'

export default class Fragments extends Component {
  render() {
    return (
      <>
        <li><GrCirclePlay/> Mohammad</li>
        <li><TfiApple/> Reza</li>
        <li><VscSnake/>Amir</li>
        <li><VscSourceControl/>ali</li>
        <li><VscSparkleFilled/>amin</li>
        {/* <li><TfiTruck/>Erfan</li> */}
      </>
    )
  }
}
