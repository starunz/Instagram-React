import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


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

            <Sidebar />

        </div>
    );
}