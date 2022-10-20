import React from "react";

export default function Weather(){
    return(
    <div className="card">
        <div className="row">
            <div className="col">
            <form className="input-city">
                <div className="row mt-3">
                    <div className="col-1"></div>
                    <div className="col-8">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="city-name-input" placeholder="Enter a city..." />
                        </div>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>

   
        
    );
}