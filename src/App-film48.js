import React from "react";
import "./App47.css";
import Modal from "./componet/47.modal/film48";

export default function App47() {
  return (
    <Modal>
      <div className="modal_header__content">
        <div className="modal_header">
          <span className="modal_close">x</span>
        </div>
        <div className="modal_content">
          <h3 className="modal_title">پرداحت شما با موفقیت تکمیل شد</h3>
        </div>
      </div>
      <div className="modal_btns_footer">
        <button className="modal_btn">تایید</button>
        <button className="modal_btn">بازگشت </button>
      </div>
    </Modal>
  );
}
