import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Accueil';
import Histoire from './Histoire';


function App() {
  //Les fonctions flèches ont un return
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {}); 

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

  //"Persister" (sauvegarder) le panier dans localStorage
  //Utiliser le HOOK useEffect pour executer ce code de façon contrôlée, POUR LE PROTÉGER... ithink
  //SI on mets des variable, le useEffect est utilisé en même temps que la variable utilisée, soit panier

  //À chaque fois que le panier change
  useEffect( () => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier] );

  return (
    <div className="App">
      <Entete panier={panier} test="Allo Props" />
      <Routes>
        <Route path='/' element={<Accueil/>} > </Route>
        <Route path='/notre-histoire' element={<Histoire/>}> </Route>
        <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/> }> </Route> 
      </Routes>


      <div>
        <span>Nombre de clics: <i>{compteur}</i> </span>        
        <button onClick={ () => {setCompteur(compteur+1); console.log('Compteur des clics : ', compteur);} }> Cliquez-moi </button>
      </div>

      <PiedPage />
    </div>
  );
}

export default App;
