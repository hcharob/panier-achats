import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete(props) {
    console.log("Le panier dans entête : ", props);
    return (
        // la nom de la classe a tjrs le meme nom que la fonction
        <header className="Entete"> 
            <h1>Magasin général</h1>
            <nav>
            
                <Badge badgeContent={Object.values(props.lePanier).length} color="secondary">
                    <ShoppingCartSharpIcon/>
                </Badge>
           
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}