import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit({etatPanier: [panier, setPanier], nom, prix, pid}) {
    //L'ordre est important

    //On peut sortir les deux élément du tableau
    // const [panier, setPanier] = etatPanier;
    // Mais la bonne version est destructurée

    let qte = 0;
    if(panier[pid]) {
        qte = panier[pid].qte;
    }
    console.log("Quantité du produit : ", pid, " : ", qte);

    function ajouterAuPanier() {
        if (panier[pid]) {
            panier[pid].qte++;
        } else {
            panier[pid] = {
                prix: prix,
                qte: 1
            };
        }
        console.log("Le panier après tout : ", panier);
        // Notifier React que le panier a changé : 
        // Il faut cloner l'objet panier pour que React détecte que le panier a changé

        //option 1
        // let clonePanier = JSON.parse(JSON.stringify(panier));

        //option2
        // let clonePanier = Object.assign({}, panier);

        //option3
        // Étale le panier?
 
        // let clonePanier = {... panier}
        setPanier({...panier});
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".webp"} alt={nom} />
            <div className="titre">{nom}</div> 
            <div className="prix">{prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />
        </article>
    );
}

/*
let art = document.createElement('article);
art.setAttribute('class, 'Produit');
let img = document.createElement('img);
...
art.appendChild('img');
*/