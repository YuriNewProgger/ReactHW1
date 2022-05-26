import './about.css';


let About = () =>{
    return(
        <div>
            <ul className="about">
                <li><span className="title">Название:</span>Железный человек</li>
                <li><span className="title">Старан:</span>США, Канада</li>
                <li><span className="title">Жанр:</span>фантастика, боевик, приключения</li>
                <li><span className="title">Слоган:</span><span className="citat">"Героями не рождаются. Героями становятся."</span></li>
            </ul>
        </div>
    );
}

export default About;