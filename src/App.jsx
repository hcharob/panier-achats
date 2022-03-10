import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import Accueil from './Accueil';
import Histoire from './Histoire';
import { authFirebase, authGoogle } from './firebase/init';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function App() {
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {}); 

  //Variable
  const panier = etatPanier[0];

  //"Persister" (sauvegarder) le panier dans localStorage
  //Utiliser le HOOK useEffect pour executer ce code de façon contrôlée, POUR LE PROTÉGER... ithink
  //Si on mets des variable, le useEffect est utilisé en même temps que la variable utilisée, soit panier

  //À chaque fois que le panier change
  useEffect( () => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier] );

  //État de l'utilisateur connecté
  const [util, setUtil] = useState(null);

  /**
   * Déclenche le processus d'authentificaion avec Google Auth Prodivder
   */
  function connexion() {
    //Référence firebase, référence provider
    signInWithPopup(authFirebase, authGoogle).then (
      objUserGoogle => setUtil(objUserGoogle.user)
    ); 
  }

  // Attacher un "observateur" de changement d'état de connexion (gestionnaire d'événement de Firebase Authentification)
  useEffect(() => onAuthStateChanged(authFirebase, user => setUtil(user)), [util]);
  
  return (
    <div className="App">
        {
          util ?
          <>
          <Entete util={util} setUtil={setUtil} panier={panier} test="Allo Props" />
          <Routes>
            <Route path='/' element={<Accueil/>} > </Route>
            <Route path='/notre-histoire' element={<Histoire/>}> </Route>
            <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier}/> }> </Route> 
          </Routes>
          <PiedPage />
          </>
          :
          <button onClick={connexion}>Connexion</button>
      }    
    </div>
  );
}

export default App;
