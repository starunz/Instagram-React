export default function Posts() {

    const infoPost = [
        {
            profileImg: 'img/princesa.jpg', 
            profileUser: 'leia', 
            photo: 'img/leia.jpg', 
            likeImg: 'img/luke.jpg', 
            likeUser: 'luke', 
            likes: 'outras trocentas pessoas',
            commentUser: 'solo',
            comment: '❤️❤️❤️'
        },
        {
            profileImg: 'img/yoda3.jpg', 
            profileUser: 'yoda', 
            photo: 'img/mestreee.jpg', 
            likeImg: 'img/grogu1.jpg', 
            likeUser: 'grogu', 
            likes: 'outras trocentas pessoas',
            commentUser: 'luke',
            comment: '🙇'
        },
        {
            profileImg: 'img/ue.jpg', 
            profileUser: 'semfuturo', 
            photo: 'img/video.mp4', 
            likeImg: 'img/desocupado.jpg', 
            likeUser: 'desocupado', 
            likes: 'outras trocentas pessoas',
            commentUser: 'nadapafazer',
            comment: '🐻🦆'
        },
    ]

    return (
        <div class="posts">
            {infoPost.map( (post, index) => 
            <Post
                key={index}
                profileImg={post.profileImg}
                profileUser={post.profileUser}
                photo={post.photo}
                likeImg={post.likeImg}
                likeUser={post.likeUser}
                likes={post.likes}
                commentUser={post.commentUser}
                comment={post.comment}
            />)}
        </div>
    );
}

function Post (props) {
    return (
        <div class="post">
            <div class="post-topo">
                <div class="post-profile">
                    <img src={props.profileImg} class="profile-photo" />
                    <span>{props.profileUser}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div class="post-photo">
                <img src={props.photo} />
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
                    <img src={props.likeImg} />
                    <div class="like">
                        <span>Curtido por <strong>{props.likeUser}</strong> e <strong>{props.likes}</strong></span>
                    </div>
                </div>
                <div class="post-comments">
                    <div class="comment">
                        <span><strong>{props.commentUser}</strong> {props.comment} </span>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <div class="comment-field">
                    <input type="text" placeholder="Adicione um comentário..." />
                    <button class="publish-btn">Publicar</button>
                </div>
            </div>
        </div> 
    );
}