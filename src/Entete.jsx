import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

//Remarquer la destructuration d'objet
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
export default function Entete({panier}) {
    // console.log("Les props du composant Entête : ", props);
    // console.log("Le panier dans Entête : ", props.panier);

    // let {panier, test} = props;
    // const panier = props.panier;
    // console.log("Le panier (Entete) : ", panier);
    // console.log("Le tableau des valeurs du panier", Object.values(panier));
    let totalQte = Object.values(panier).reduce((acc, article) => acc+article.qte, 0);

    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                <Badge badgeContent={totalQte} color="secondary">
                    <ShoppingCartSharpIcon/>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}