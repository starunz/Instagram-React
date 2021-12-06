import Stories from "./Stories";
import Posts from "./Posts";


export default function Contents() {
    return (
        <div class="container">
            <div class="timeline">
                
                <Stories />
                <Posts />

            </div>

            <div class="bottom-bar-mobile">
                <div class="botoes-bottom">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

            </div> 

            <div class="sidebar">
                <div class="user">
                    <img src="img/mando.jpg">
                    <div class="text">
                        <h4>mando</h4>
                        <h5>Mando</h5>
                    </div>
                </div>
                <div class="sugestions">
                    <div class="title">
                        <h1>Sugestões para você</h1>
                        <div><h3>Ver tudo</h3></div>
                    </div>
                    <div class="sugestion">
                        <div class="user">
                            <img src="img/fett.jpg">
                            <div class="text">
                                <div class="nome">boba.fett</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    <div class="sugestion">
                        <div class="user">
                            <img src="img/luke.jpg">
                            <div class="text">
                                <div class="nome">luke</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestion">
                        <div class="user">
                            <img src="img/cobb2.jpg">
                            <div class="text">
                                <div class="nome">cobb.vanth</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestion">
                        <div class="user">
                            <img src="img/bokatan.jpg">
                            <div class="text">
                                <div class="nome">bo-katan</div>
                                <div class="razao">Segue você</div>
                            </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestion">
                        <div class="user">
                            <img src="img/greef-karga.jpg">
                            <div class="text">
                                <div class="nome">greef.karga</div>
                                <div class="razao">Novo no Instagram</div>
                            </div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                    
                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>
                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    );
}