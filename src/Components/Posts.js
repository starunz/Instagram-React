export default function Posts() {
    return (
        <>
            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/princesa.jpg" class="profile-photo" />
                        <span>leia</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div class="post-photo">
                <img src="img/leia.jpg" />
                </div>
                <div class="post-footer">
                    <div class="post-actions">
                        <div class="reactions">
                            <ion-icon name="heart-outline" ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div class="post-like">
                        <img src="img/luke.jpg" />
                        <div class="like">
                            <span>Curtido por <strong>luke</strong> e <strong>outras trocentas pessoas</strong></span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>luke</strong> ❤️ </span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="comment">
                            <span><strong>solo</strong> ❤️❤️❤️ </span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..." />
                        <button class="publish-btn">Publicar</button>
                    </div>
                </div>
            </div> 

            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/yoda3.jpg" class="profile-photo" />
                        <span>yoda</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div class="post-photo">
                    <img src="img/mestreee.jpg" />
                </div>
                <div class="post-footer">
                    <div class="post-actions">
                        <div class="reactions">
                            <ion-icon name="heart-outline" ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div class="post-like">
                        <img src="img/grogu1.jpg" />
                        <div class="like">
                            <span>Curtido por <strong>grogu</strong> e <strong>outras trocentas pessoas</strong></span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>grogu </strong>●ω●</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="comment">
                            <span><strong>luke </strong>🙇</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..." />
                        <button class="publish-btn">Publicar</button>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-topo">
                    <div class="post-profile">
                        <img src="img/ue.jpg" class="profile-photo" />
                        <span>semfuturo</span>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <div class="post-photo">
                    <video autoplay="" muted="">
                        <source src="img/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="post-footer">
                    <div class="post-actions">
                        <div class="reactions">
                            <ion-icon name="heart-outline" ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    <div class="post-like">
                        <img src="img/desocupado.jpg" />
                        <div class="like">
                            <span>Curtido por <strong>desocupado</strong> e <strong>outras trocentas pessoas</strong></span>
                        </div>
                    </div>
                    <div class="post-comments">
                        <div class="comment">
                            <span><strong>nadapafazer</strong>🐻</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                        <div class="comment">
                            <span><strong>ue</strong>🐻🦆</span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="comment-field">
                        <input type="text" placeholder="Adicione um comentário..." />
                        <button class="publish-btn">Publicar</button>
                    </div>
                </div>
            </div>
        </>    
    );
}