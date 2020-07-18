import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import testbus from "../../assets/img/test-bus.png";
import s from "./ModalImg.module.css";

const ModalImg = ({ showModal, onHide }) => {
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Card.Img variant="top" src={testbus} />
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className={s.btn}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalImg;
