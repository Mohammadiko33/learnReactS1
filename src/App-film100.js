import React, { Component } from 'react'
import './componet/100.coustomize/App.css'
import {Modal , Button} from 'react-bootstrap'
export default class App100 extends Component {



   constructor(props){
  super(props)

  this.state = {
   showModal: true,
  }
 }
  render() {
    return (
      <div>
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
        <Modal.Title id="contained-modal-title-vcenter" className='header_title'>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p className='caption'>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => this.setState({showModal: false})}>Buy</Button>
        <Button className='btn btn-info' style={{color: "#fff"}} onClick={() => this.setState({showModal: false})}>more Info</Button>
        <Button className='btn btn-danger' onClick={() => this.setState({showModal: false})}>Close</Button>
      </Modal.Footer>
    </Modal>
      </div>
      </div>
    )
  }
}
// نحوه استایل کاستومایز در ریاکت بوتسترپ