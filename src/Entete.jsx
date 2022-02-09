import './Entete.scss';

export default function Entete() {
    return (
        // la nom de la classe a tjrs le meme nom que la fonction
        <header className="Entete"> 
            <h1>Magasin général</h1>
            <nav>
            <a href="#">Panier d'achats</a><br />
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}