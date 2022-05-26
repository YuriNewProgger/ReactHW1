import Poster from '../Assets/moviePoster.jpg';
import About from './AboutMovie';
import './cardMovie.css';

let Movie = () => {
    return(
        <div className="cardMovie">
            Task 5
            <div className="infoMovie">
                <img src={Poster} alt="" />
                <About/>
            </div>
            <div className="discriotionMovie">
                <p>
                Миллиардер-изобретатель Тони Старк попадает в плен к Афганским террористам, 
                которые пытаются заставить его создать оружие массового поражения. 
                В тайне от своих захватчиков Старк конструирует высокотехнологичную киберброню, 
                которая помогает ему сбежать. Однако по возвращении в США он узнаёт, 
                что в совете директоров его фирмы плетётся заговор, чреватый страшными последствиями. 
                Используя своё последнее изобретение, Старк пытается решить проблемы своей компании радикально...
                </p>
            </div>
        </div>
    );
}


export default Movie;