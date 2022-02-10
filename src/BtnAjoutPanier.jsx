import './BtnAjoutPanier.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier() {
    return ( 
    <Badge badgeContent={7} color="secondary">
    <button className="BtnAjoutPanier">Ajouter au panier </button>
    </Badge> 
    );
}