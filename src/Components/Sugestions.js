export default function Sugestions() {
    const infoSugestions = [
        {
            sugestionImg: 'img/fett.jpg', 
            sugestionUser:'boba.fett', 
            reason: 'Segue você'
        },
        {
            sugestionImg: 'img/luke.jpg', 
            sugestionUser:'luke', 
            reason: 'Segue você'
        },
        {
            sugestionImg: 'img/cobb2.jpg', 
            sugestionUser:'cobb.vanth', 
            reason: 'Segue você'
        },
        {
            sugestionImg: 'img/bokatan.jpg', 
            sugestionUser:'bo-katan', 
            reason: 'Segue você'
        },
        {
            sugestionImg: 'img/greef-karga.jpg', 
            sugestionUser:'greef.karga', 
            reason: 'Novo no Instagram'
        },
    ]

    return (
        <div class="sugestions">
        <div class="title">
            <h1>Sugestões para você</h1>
            <div><h3>Ver tudo</h3></div>
        </div>

        {infoSugestions.map( (sugestion, index) => 
        <Sugestion 
            key={index}
            sugestionImg={sugestion.sugestionImg}
            sugestionUser={sugestion.sugestionUser}
            reason={sugestion.reason}
        />)}  

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}

function Sugestion(props) {
    return (
        <div class="sugestion">
            <div class="user">
                <img src={props.sugestionImg} />
                <div class="text">
                    <div class="name">{props.sugestionUser}</div>
                    <div class="reason">{props.reason}</div>
                </div>
            </div>
            <div class="follow">Seguir</div>
        </div>
    );
}