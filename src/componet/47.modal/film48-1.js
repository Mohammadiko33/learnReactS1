import "./film47.css";

import React, { Component } from "react";

export default class film48_1 extends React.Component {
  render() {
    return (
      <div className="continer">
        <div className="modal_massage">
          <div className="modal_header__content">
            <div className="modal_header">
              <span className="modal_close">x</span>
            </div>
            {this.props.children}
          </div>
          <div className="modal_btns_footer">
            <button className="modal_btn">تایید</button>
            <button className="modal_btn">بازگشت </button>
          </div>
        </div>
        <h1>moammadiko</h1>
      </div>
    );
  }
}
