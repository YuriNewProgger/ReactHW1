import logo from './logo.svg';
import './App.css';
import Profile from './profile-Component/Profile';
import CityInfo from './city-Info-Component/city-Info';
import Recipe from './recipe-Component/Recipe';
import Bibliography from './bibliography-Component/Bibliography';
import Photo from './Assets/shakespeare.png';
import Movie from './movie-Component/Movie';

function App() {
  //Данный блок был создан в этой области для тренировки прокидывания св-в
  let name = "Уи́льям Шекспи́р";
  let birthday = "Дата рождения:	не позднее 26 апреля 1564";
  let birthdayPlace = "Место рождения:	Стратфорд-апон-Эйвон, Уорикшир, Англия";
  let deadDay = "Дата смерти:	23 апреля (3 мая) 1616";
  let deadPlace = "Место смерти:	Стратфорд-апон-Эйвон, Уорикшир, Англия";
  let kindActivity = "Род деятельности: драматург, поэт, актёр";
  let listWorks = [
    {
      title:"Всё хорошо, что хорошо кончается",
      yearCreate:1601,
      yearPublish:1623
    },
    {
      title:"Как вам это понравится",
      yearCreate:1599,
      yearPublish:1623
    },
    {
      title:"Комедия ошибок",
      yearCreate:1592,
      yearPublish:1623
    },
  ]

  return (
    <div>
      <Profile/>
      <hr/>
      <CityInfo/>
      <hr/>
      <Recipe/>
      <hr/>
      <Bibliography img={Photo} name={name} birthday={birthday} birthdayPlace={birthdayPlace}
      deadDay={deadDay} deadPlace={deadPlace} kindActivity={kindActivity} listWorks={listWorks}/>
      <hr/>
      <Movie/>
    </div>
  );
}

export default App;
