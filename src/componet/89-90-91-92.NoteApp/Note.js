import React, { Component } from 'react'
import './Note.css'

export default class NoteApp extends Component {

  removeHandler(id){
    this.props.onRemove(id)
  }

  render() {

    let {id , title , color} = this.props

    return (
<div className="result-box" onClick={this.removeHandler.bind(this , id)} style={{backgroundColor: `${color}`}}><p>{title}</p></div>
    )
  }
}
