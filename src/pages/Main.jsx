import React, { useEffect, useCallback, useState } from "react";
import { imgPath } from "../helpers/imgPath";
import Button from "../components/UI/Button/Button";
import Modal from "../components/UI/Modal/Modal";
import Image from "../components/UI/Image/Image";
import { cats } from "../helpers/cats";
import "../App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [cat, setCat] = useState(cats[1]);

  useEffect(() => {
    if (modal) {
      setCat(cats[imgPath(9, 0)]);
    }
  }, [modal]);

  const callbackRef = useCallback(inputElement => {
    if (inputElement) {
      inputElement.focus();
    }
  }, [modal]);

  const closeModal = (e) => {
    if(e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 27) {
      e.preventDefault();
      setModal(false);
    }
  }
  
  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>Cat for you :з</Button>

      <Modal
        visible={modal}
        setVisible={setModal}>
        <Image
          src={cat}
          alt="cats"
        />
        <Button
          style={{ marginTop: "20px" }}
          onClick={() => setModal(false)}>
          Close
        </Button>
        <input 
          type="text" 
          name="close"
          ref={callbackRef}
          onKeyDown={closeModal}
          autoComplete="off"
        />
      </Modal>
    </div>
  );
}

export default App;