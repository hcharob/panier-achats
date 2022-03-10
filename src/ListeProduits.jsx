import './ListeProduits.scss';
import Produit from './Produit';
import { useState, useEffect } from 'react';
import { bdFirestore as bd } from './firebase/init';
import { collection, query, getDocs, where } from "firebase/firestore"; 

export default function ListeProduits({etatPanier}) {
    const [produits, setProduits] = useState ([]);
    //Obtenir les produits de la collection FIrestore
    useEffect(function() {
    //Obtenir tous les documents de la collection 'maggen-produits'
    getDocs(query(collection(bd, 'maggen-produits'), where('prix', '<=', 100))).then (
        qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
        );
    }, []); //prends une fonction et un tableau de dépendace pour l'exécuter une seule fois

    return (
     // console.log('La variable lesProduits : ', lesProduits);
    // Méthode 1 (programmation impérative avec une boucle for)
    // let composantsProduits = [];
    // //Parcourir le tableau lesProduits et générer un composant Produit pour chaque élément
    // for (let i = 0; i < lesProduits.length; i++) {
    //     composantsProduits.push ( <Produit nom= {lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id} /> );
    // }

    // Exemple avec la fonction map
    // let notes = [59.566, 78.23, 85.258, 35.9954];
    // // Pour transformer ce tableau dans un tableau qui contient les notes arrondies à une place décimale:

    // function arrondir(nb) {
    //     return nb.toFixed(1)-0; 
    // }
    // Remarquer l'utilisation des fonctions fléchées et de la méthode map(), map créé un nouveau tableau
    // let notesArrondies = notes.map(uneNote => uneNote.toFixed(1)-0); //Fonction fléchée what is thisss

        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}