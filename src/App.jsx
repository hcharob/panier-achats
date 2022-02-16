import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App(props) {
  const etatPanier = useState({});

  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  console.log("L'état panier : ", panier);

  //   let panier = {
  //   //   prd0003: {
  //   //       prix: 13.95,
  //   //       qte:1
  //   //   },
  //   //   prd0001: {
  //   //     prix: 15.95,
  //   //     qte:5
  //   // }
  // };


  //changer lePanier pour panier
  return (
    <div className="App">
      <Entete lePanier = {panier} />
      <ListeProduits lePanier = {panier} setPanier={setPanier} />
      <PiedPage />
    </div>
  );
}

export default App;
