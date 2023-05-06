import modalStyle from "./Modal.module.css";

const Modal = ({ children, visible, setVisible}) => {
  return (
    <div
      className={`${visible ? modalStyle.active : ""}
       ${modalStyle.defaultModal}`}
      onClick={() => setVisible(false)}>
      <div
        className={modalStyle.modalContent}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;