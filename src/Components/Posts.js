export default function Posts() {

    const infoPost = [
        {
            profileImg: 'img/princesa.jpg', 
            profileUser: 'leia', 
            media: 'img/leia.jpg', 
            likeImg: 'img/luke.jpg', 
            likeUser: 'luke', 
            likes: 'outras trocentas pessoas',
            commentUser: 'solo',
            comment: '❤️❤️❤️',
            type: 'image'
        },
        {
            profileImg: 'img/yoda3.jpg', 
            profileUser: 'yoda', 
            media: 'img/mestreee.jpg', 
            likeImg: 'img/grogu1.jpg', 
            likeUser: 'grogu', 
            likes: 'outras trocentas pessoas',
            commentUser: 'luke',
            comment: '🙇',
            type: 'image'
        },
        {
            profileImg: 'img/ue.jpg', 
            profileUser: 'semfuturo', 
            media: 'img/video.mp4', 
            likeImg: 'img/desocupado.jpg', 
            likeUser: 'desocupado', 
            likes: 'outras trocentas pessoas',
            commentUser: 'nadapafazer',
            comment: '🐻🦆',
            type: 'video'
        },
    ]

    return (
        <div className="posts">
            {infoPost.map( (post, index) => 
            <Post
                key={index}
                profileImg={post.profileImg}
                profileUser={post.profileUser}
                media={post.media}
                likeImg={post.likeImg}
                likeUser={post.likeUser}
                likes={post.likes}
                commentUser={post.commentUser}
                comment={post.comment}
                type={post.type}
            />)}
        </div>
    );
}

function Post (props) {
    return (
        <div className="post">
            <div className="post-topo">
                <div className="post-profile">
                    <img src={props.profileImg} className="profile-photo" />
                    <span>{props.profileUser}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <PostMedia media={props.media} type={props.type}/>
            <div className="post-footer">
                <div className="post-actions">
                    <div className="reactions">
                        <ion-icon name="heart-outline" ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="post-like">
                    <img src={props.likeImg} />
                    <div className="like">
                        <span>Curtido por <strong>{props.likeUser}</strong> e <strong>{props.likes}</strong></span>
                    </div>
                </div>
                <div className="post-comments">
                    <div className="comment">
                        <span><strong>{props.commentUser}</strong> {props.comment} </span>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <div className="comment-field">
                    <input type="text" placeholder="Adicione um comentário..." />
                    <button className="publish-btn">Publicar</button>
                </div>
            </div>
        </div> 
    );
}

function PostMedia (props) {
    if (props.type === 'image') {
        return (
            <div className="post-photo">
                <img src={props.media} />
            </div>
        );
    }

    return (
        <div className="post-photo">
            <video autoPlay muted>
                <source src={props.media} type="video/mp4" />
            </video>
        </div>
    );
}