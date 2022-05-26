import vlg from '../Assets/vlg.png';
import home from '../Assets/home.jpg';
import './city-info.css';

let CityInfo = () => {
    return (
        <div >
            <p>Task 2</p>
            <div className="discription">
                <p>Россия</p>
                <p>Волгоград</p>
                <p>Основан: 1589 г.</p>
            </div>
            <div className="places">
                <img src={vlg} alt=""/>
                <img src={home} alt="" />
            </div>
        </div>
    );
}

export default CityInfo;