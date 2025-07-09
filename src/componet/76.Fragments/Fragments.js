import React, { Component } from 'react'
// import React, { Component , Fragment } from 'react'
import './Fragments.css'

export default class Fragments extends Component {
  render() {
    return (
     // <React.Fragment>
     //          <li>Mohammad</li>
     //          <li>Reza</li>
     // </React.Fragment>

     // <Fragment>
     //            <li>Mohammad</li>
     //            <li>Reza</li>
     // </Fragment>

      <>
        <li>Mohammad</li>
        <li>Reza</li>
      </>
    )
  }
}
