import Sugestions from "./Sugestions";

export default function Sidebar() {
    const infoProfile = {
        profileImg: 'img/mando.jpg',
        profileUser: 'Mando',
        profileNick: 'mando'
    }

    return (
        <div className="sidebar">
            <Profile infoProfileData={infoProfile}/>
            <Sugestions />

        </div>
    );
}

function Profile (props) {
    return (
        <div className="user">
            <img src={props.infoProfileData.profileImg} />
            <div className="text">
                <h4>{props.infoProfileData.profileNick}</h4>
                <h5>{props.infoProfileData.profileUser}</h5>
            </div>
        </div>
    );
}