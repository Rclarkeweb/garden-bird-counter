import Counter from "./Counter.js";

function Card(props) {
    return (
        <div className="col">
            <div className="card h-100 mb-3">
                <img src={props.img} alt="" className="card-img-top"></img>
                <div className="card-body text-end">
                    <a href={props.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-circle-info fa-xl"></i></a>
                    <h3 className="card-title display-6 text-center">{props.bird}</h3>
                </div>
                <div className="card-footer">
                    < Counter />
                </div>
            </div>
        </div>
    )
}

export default Card;