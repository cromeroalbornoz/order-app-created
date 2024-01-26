
import React from "react";
import { UserForm } from "./UserForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ModalForm = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Asignar Pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
