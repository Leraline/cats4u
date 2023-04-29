import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import Modal from './components/UI/Modal/Modal';
import Image from './components/UI/Image/Image';
import cat1 from './assets/img/cats/cat1.jpg';
import cat2 from './assets/img/cats/cat2.jpg';
import cat3 from './assets/img/cats/cat3.jpg';
import cat4 from './assets/img/cats/cat4.jpg';
import cat5 from './assets/img/cats/cat5.jpg';
import cat6 from './assets/img/cats/cat6.jpg';
import cat7 from './assets/img/cats/cat7.jpg';
import cat8 from './assets/img/cats/cat8.jpg';
import cat9 from './assets/img/cats/cat9.jpg';
import cat10 from './assets/img/cats/cat10.jpg';

function App() {

  const [modal, setModal] = useState(false);
  //const [src, setSrc] = useState('./assets/img/cats/cat1.jpg');
  const [cat, setCat] = useState(cat2);
  const cats = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10];

  function imgPath(max, min) {
    let i = Math.floor(Math.random() * (max - min) + min);
    setCat(cats[i]);
  }

  useEffect(() => {
    if(modal){
      imgPath(9,0);
      console.log('ok');
    }
  }, [modal])

  // useEffect(() => {
  //   if(modal) {
  //     setSrc(`./assets/img/cats/cat${imgPath(10,1)}.jpg`);
  //   };
  // }, [modal])

  return (
    <div className="App">
      <Button onClick={() => setModal(true)}>
        Cat for you :з
      </Button>

      <Modal visible={modal} setVisible={setModal}>
        <Image src={cat} alt="cats"/>
        <Button onClick= {(() => setModal(false))}>
          Close
        </Button>
      </Modal>
    </div>
  );
}

export default App;
