import './BtnAjoutPanier.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier(props) {

    return ( 
    <Badge badgeContent={props.qte} color="secondary">
    <button onClick={props.onClick} className="BtnAjoutPanier">Ajouter au panier </button>
    </Badge> 
    );
}