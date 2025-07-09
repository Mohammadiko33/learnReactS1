import React, { Component } from 'react'
import "./BookMaker.css"

export default class BookMaker extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.title}</th>
        {/* {length33} */}
        <th>{this.props.author}</th>   
        {/* {length20} */}
        <th>{this.props.year}</th>
        {/* set this styles
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden; */}
      </tr>
    )
  }
}
