import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function Contents() {
    return (
        <div className="container">
            <div className="timeline">
                <Stories />
                <Posts />
            </div>
            
            <div className="bottom-bar-mobile">
                <div className="botoes-bottom">
                    <ion-icon name="home"></ion-icon>
                    <ion-icon name="search-outline"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div> 
            
            <Sidebar />
        </div>
    );
}