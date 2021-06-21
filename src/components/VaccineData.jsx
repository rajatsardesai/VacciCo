import React from 'react';
import Booked from './Booked';
import VaccineCard from './VaccineCard';

const VaccineData = (props) => {

    const SubmitData = () => {
        props.SubmitData();
    }

    const keyValue = 0;
    const slotArray = [0, 1];
    const slotOneArray = [2, 3];
    const slotTwoArray = [4, 5];

    return (
        <>

            <div className="container mt-5 d-flex flex-wrap justify-content-center">

                {
                    props.vaccineData.map((currElem, index) => {
                        return (
                            <>
                                <div className="d-flex flex-wrap">
                                    <div className="card vaccine-data bg-transparent m-2">
                                        <div className="card-body vaccine-content" key={keyValue}>
                                            <p className="hospital-title text-center text-white p-3">{currElem.name}</p>
                                            {
                                                slotArray.map((num) => {
                                                    return (
                                                        (currElem.sessions[num]) === undefined ? <p></p> :

                                                            ((currElem.sessions[num].min_age_limit) === 18) ?
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                                :
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between justify-content-center">
                                    <div className="card vaccine-data bg-transparent m-2">
                                        <div className="card-body vaccine-content" key={keyValue}>
                                            <p className="hospital-title text-center text-white p-3">{currElem.name}</p>
                                            {
                                                slotOneArray.map((num) => {
                                                    return (
                                                        (currElem.sessions[num]) === undefined ? <p></p> :

                                                            ((currElem.sessions[num].min_age_limit) === 18) ?
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                                :
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between justify-content-center">
                                    <div className="card vaccine-data bg-transparent m-2">
                                        <div className="card-body vaccine-content" key={keyValue}>
                                            <p className="hospital-title text-center text-white p-3">{currElem.name}</p>
                                            {
                                                slotTwoArray.map((num) => {
                                                    return (
                                                        (currElem.sessions[num]) === undefined ? <p></p> :

                                                            ((currElem.sessions[num].min_age_limit) === 18) ?
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                                :
                                                                <>
                                                                    <VaccineCard age={currElem.sessions[num].min_age_limit} date={currElem.sessions[num].date} vaccineName={currElem.sessions[num].vaccine} availCapacity={currElem.sessions[num].available_capacity} />
                                                                </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }

            </div>

            <Booked />
        </>
    )
};

export default VaccineData
