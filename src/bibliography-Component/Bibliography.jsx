import './bibliography.css';
import Card from './work-card-Component/worksCard';

let Bibliography = (props) =>{
    let listWorks = props.listWorks;
    return(
        <div className='biographyComponent'>
            <p>Task 4</p>
            <div className="biography">
                <img src={props.img} alt="" />
                <div>
                    <p>Биография</p>
                    <p>{props.name}</p>
                    <p>{props.birthday}</p>
                    <p>{props.birthdayPlace}</p>
                    <p>{props.deadDay}</p>
                    <p>{props.deadPlace}</p>
                    <p>{props.kindActivity}</p>
                </div>
            </div>
            <hr />
            <div className='list'>
                <p>Список некоторых произведений:</p>
                <ul>
                    {listWorks.map(work => 
                        (
                            <li>
                                <Card title={work.title} yearCreate={work.yearCreate} yearPublish={work.yearPublish}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Bibliography;