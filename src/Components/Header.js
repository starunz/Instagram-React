export default function Top () {
    return (
        <div className="topo">
            <div className="topo-container">
                <div className="logo">
                    <ion-icon name="logo-instagram" className="icon"></ion-icon>
                    <a href="https//instagram.com"><img src="img/logo.png" /></a>
                </div>
                <input type="text" placeholder="Pesquisar" />
                <div className="botoes-topo">
                    <a href="https//instagram.com"><ion-icon name="paper-plane-outline"></ion-icon></a>
                    <a href="https//instagram.com"><ion-icon name="compass-outline"></ion-icon></a>
                    <a href="https//instagram.com"><ion-icon name="heart-outline"></ion-icon></a>
                    <a href="https//instagram.com"><ion-icon name="person-outline"></ion-icon></a>
                </div>
            </div>

            <div className="topo-container-mobile">
                <ion-icon name="logo-instagram"></ion-icon> 
                <img src="img/logo.png" className="logo" /> 
                <ion-icon name="paper-plane-outline"></ion-icon> 
            </div>   
        </div>
    )
}