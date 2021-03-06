import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { authFirebase } from './firebase/init';
import { signOut } from '@firebase/auth';

//Remarquer la destructuration d'objet
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier, util, setUtil}) {
    console.log("Propriété 'user' de l'objet GoogleCredential renvoyé par l'authentification fédérée Google :", util);

    // Obtenir les 5 infos importantes pour le sommaire panier (on passe le tableau (Array) des valeurs dans l'objet 'panier)
    // const infoPanier = calculerInfoPanier(Object.values(panier));
    //OU
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));
    let totalQte = Object.values(panier).reduce((acc, article) => acc+article.qte, 0);

    return (
        <header className="Entete">
            <h1><NavLink to="/" >Magasin général</NavLink></h1>
            <nav className="nav-principale">
                {/* On peut écrire la className de deux façcons */}
                <NavLink to="/nos-produits" className={({isActive}) => isActive ? 'lien-actif' : ''}> Produits </NavLink>
                {/* OU  */}
                 {/* <NavLink to="/notre-histoire" className={(lien) => lien.isActive ? 'lien-actif' : ''}>Notre histoire</NavLink> */}
                <NavLink to="/notre-histoire" className={({isActive}) => isActive ? 'lien-actif' : ''}>Notre histoire</NavLink>
               
            </nav>

            <nav className='nav-secondaire'>
                {/* Sommaire-panier */}
            <input type="checkbox" id="cc-sommaire-panier" />
            <div className="sommaire-panier">
                <h3>Sommaire du panier</h3>
                {/* (div.info>span*2)*5 */}
                <div>
                    <span>Articles différents: </span>
                    <span> {articlesDifferents} </span></div>
                <div>
                    <span>Articles totaux: </span>
                    <span> {articlesTotaux} </span></div>
                <div>
                    <span>Sous-total: </span>
                    <span> {sousTotal} </span></div>
                <div>
                    <span>Taxes: </span>
                    <span> {taxes} </span></div>
                <div>
                    <span>Total: </span>
                    <span> {total} </span></div>
                </div>
                
                <Avatar alt={util.displayName} src={util.photoURL} />
                <div>{util.displayName}</div>
                <button onClick={ () => signOut(authFirebase).then(setUtil(null)) }>Déconnexion</button>

                <Badge badgeContent={totalQte} color="secondary">
                    <label htmlFor="cc-sommaire-panier">  <ShoppingCartSharpIcon/> </label>
                </Badge>
                <a href="#">Contactez-nous</a>

            </nav>
        </header>
    );
}

/**
 * Calculer l'information du commaire du panier
 * 
 * @param Array panierAchat Objet panier d'achats
 * 
 * @return Object Objet contenant les 5 infos requises du panier
 */

function calculerInfoPanier(panierAchats) {
    const _sousTotal = panierAchats.reduce((acc, courant) => acc + courant.qte * courant.prix, 0);
    const _taxes = _sousTotal * 0.14975;

    return {
        //Le permier nom est juste un étiquette
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc + courant.qte, 0),
        sousTotal: _sousTotal.toFixed(2),
        taxes: _taxes.toFixed(2), //Arrondi à deux chiffres
        total: (_sousTotal + _taxes).toFixed(2)
    }
}