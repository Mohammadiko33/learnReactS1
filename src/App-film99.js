import React, { Component } from 'react'
import MyVerticallyCenteredModal from './componet/99.MyVerticallyCenteredModal/MyVerticallyCenteredModal'
import {Modal , Button} from 'react-bootstrap'

export default class App99 extends Component {

 constructor(props){
  super(props)

  this.state = {
   showModal: true,
  }
 }


  render() {
    return (
      <div> <Button className='btn btn-dark' onClick={() => {this.setState({showModal: true})}} >show modal</Button>
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => {this.setState({showModal: false})}}
      show={this.state.showModal}
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => this.setState({showModal: false})}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
    )
  }
}

// توضیحات 
// اگر در تگ اصلی که فراخانی کردی اتربیوتی به اسم دیلاوگ داشت باید حذفش کنیم و اصلا ازش استفاده نکنیم 
// و بجاش یک پراپ براش ارسال بشه به اسم شو که همیشه یا تورو هست یا فالس و این مدال اگر تورو باشه این مدال برای ما نشون داده میشه اما اگر فالس باشه این مدال به ما نشون داده نمیشود 
// ما میتوانیم یک اتربیوتی از سایت ریاکت بوتسترپ که اونجا ذکر شده برداریم و اینجا از قابلیت هاش استفاده کنیم