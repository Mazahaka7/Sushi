import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalWindow = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  console.log(props);
  return (
    <>
      {ReactDOM.createPortal(
        <div>
          <Backdrop />
          <ModalWindow>{props.children}</ModalWindow>
        </div>,
        portalElement
      )}
    </>
  );
};
export default Modal;
