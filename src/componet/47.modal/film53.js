import PropTypes from "prop-types";
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

film48_1.prototype = {
  children: PropTypes.string.isRequired
}

// توضیحات
// پراپ تایپ کمک میکند که ورودی فانکشن رو کنترل کنیم به عنوان مثال چن خط بالا میگم چیزی که توی ورودی ارسال میشه باید استرینگ باشه و حتما ارسال بشه 