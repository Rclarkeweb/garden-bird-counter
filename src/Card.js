import Counter from "./Counter.js";

function Card(props) {
    return (
        <div className="col">
            <div className="card h-100 text-bg-light mb-3">
                <img src={props.img} alt="" className="card-img-top"></img>
                <div className="card-body">
                    <h4 className="card-title display-6">{props.bird}</h4>
                </div>
                <div className="card-footer">
                    < Counter />
                </div>
            </div>
        </div>
    )
}

export default Card;