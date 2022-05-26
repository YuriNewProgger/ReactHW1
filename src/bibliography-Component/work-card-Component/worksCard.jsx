import './card.css';

let card = (props) =>{
    return(
        <div className='cardValue'>
            <hr />
            <p><span className="labelTitle">Название:</span> <span className="labelValue">{props.title}</span></p>
            <p><span className="labelTitle">Год создания:</span> <span className="labelValue">{props.yearCreate}</span></p>
            <p><span className="labelTitle">Год публикации:</span> <span className="labelValue">{props.yearPublish}</span></p>
            <hr />
        </div>
    )
}

export default card;