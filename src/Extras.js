function Extras() {

    return (
        <div className="col">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-12">
                        <h3 className="card-title display-6 text-start p-3">
                            Did you see any other birds or wildlife?
                        </h3>
                        <div className="card-body">
                            <p className="text-start">You can type them in the box below.</p>
                            <textarea className="form-control" rows="2" aria-label="Textbox"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extras;