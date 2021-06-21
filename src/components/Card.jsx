import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="card state-data card-gray my-2">
                <div className="card-body card-content">
                    <p className="card-title text-center text-white">Active</p>
                    <p className="card-text text-center text-white" key={props.id}>{props.active}</p>
                </div>
            </div>
            <div className="card state-data card-pink my-2">
                <div className="card-body card-content">
                    <p className="card-title text-center text-white">Deaths</p>
                    <p className="card-text text-center text-white" key={props.id}>{props.deaths}</p>
                </div>
            </div>
            <div className="card state-data card-blue my-2">
                <div className="card-body card-content">
                    <p className="card-title text-center text-white">Active</p>
                    <p className="card-text text-center text-white" key={props.id}>{props.recovered}</p>
                </div>
            </div>
            <div className="card state-data card-yellow my-2">
                <div className="card-body card-content">
                    <p className="card-title text-center text-white">Active</p>
                    <p className="card-text text-center text-white" key={props.id}>{props.confirmed}</p>
                </div>
            </div>
        </>
    )
}

export default Card
