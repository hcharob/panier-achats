import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App() {
  //Pour commencer, ça doit être un objet vide
  const etatPanier = useState({});

  //Variable
  const panier = etatPanier[0];
  // const setPanier = etatPanier[1];

  // option 2, destructuration de tableau
  // const [panier, setPanier] = useState({});

  // console.log("L'état panier : ", panier);

  // let panier = {
  //     prd0003: {
  //       prix: 13.95,
  //       qte: 5
  //     }
  //     prd0001: {
  //       prix: 9.95,
  //       qte: 2
  //     },
  //     prd0004: {
  //       prix: 11.95,
  //       qte: 18
  //     }
  // };

  // let compteurClic = 0;

  // 1er et 2e élément d'un tableau
  const [compteur, setCompteur] = useState(0);

  // 0 est l'état initial de la variable
  // const [couleur, setCouleur] = useState(0);

  return (
    <div className="App">
      <Entete panier={panier} test="Allo Props" />
       { /*le premier etatPanier est une variable qu'on défini*/ }
      <ListeProduits etatPanier={etatPanier} />

      <div>
        <span>Nombre de clics: <i>{compteur}</i> </span>        
        <button onClick={ () => {setCompteur(compteur+1); console.log('Compteur des clics : ', compteur);} }> Cliquez-moi </button>
      </div>

      <PiedPage />
    </div>
  );
}

export default App;
