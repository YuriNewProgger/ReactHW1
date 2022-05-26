import './way-cooking-card.css';

let WayCookingCard = (props) => {
    return(
        <div className="stepCard">
            <img src={props.img} alt="" />
            <div>{props.text}</div>
        </div>
    );
}

export default WayCookingCard;