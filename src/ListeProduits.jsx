import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';

export default function ListeProduits(props) {
    
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

    return (
    <section className="ListeProduits">
        <h2>Nos produits</h2>
            <div className="produits">
            {
             lesProduits.map(produit => <Produit panier={props.lePanier} setPanier={setPanier} key={produit.id} nom={produit.nom} prix={produit.prix}  pid={produit.id} />)
            }
            </div>
    </section>
    );
}