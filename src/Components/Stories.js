export default function Stories () {

    const infoUserStories = [
        {
            img: 'img/ig-11.jpg',
            name: 'ig-11'
        },
        {
            img: 'img/bb-8.jpg',
            name: 'bb-8'
        },
        {
            img: 'img/ahsoka-tano (2).jpg',
            name: 'ahsoka_tano'
        },
        {
            img: 'img/r2-d2.jpg',
            name: 'r2-d2'
        },
        {
            img: 'img/The-Mandalorian-Kuiil-Vest-510x600.jpg',
            name: 'Kuiil'
        },
        {
            img: 'img/c-d.jpg',
            name: 'cara.dune'
        },
        {
            img: 'img/grogu1.jpg',
            name: 'grogu'
        },
        {
            img: 'img/ue.jpg',
            name: 'semfuturo'
        },
    ]

    return (
        <ul className="stories">
            {infoUserStories.map( (story, index) => 
            <Story 
                key={index} 
                img= {story.img} 
                name={story.name} 
            />)}
            <div className="button-scroll">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
        </ul>
    );
}

function Story (props) {
    return (
        <li className="storie">
            <div className="image-storie">
                <img src= {props.img} />
            </div>
            <p>{props.name}</p>
        </li>
    );
}