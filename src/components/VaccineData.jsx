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

    var date = new Date(); // M-D-YYYY

    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();

    var dateString = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
    var dateoneString = (d <= 9 ? '0' + d : d + 1) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
    var datetwoString = (d <= 9 ? '0' + d : d + 2) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

    return (
        <>

            <div className="container mt-5 d-flex vaccine-container">

                {
                    props.vaccineData.map((currElem, index) => {
                        return (
                            <>
                                <div className="d-flex flex-column">
                                    <div className="text-center mb-3 mt-5">
                                        <span className="date-title text-center badge rounded-pill bg-light text-dark">{dateString}</span>
                                    </div>
                                    <div className="card vaccine-data bg-transparent m-2 h-100">
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
                                <div className="d-flex flex-column">
                                    <div className="text-center mb-3 mt-5">
                                        <span className="date-title text-center badge rounded-pill bg-light text-dark">{dateoneString}</span>
                                    </div>
                                    <div className="card vaccine-data bg-transparent m-2 h-100">
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
                                <div className="d-flex flex-column">
                                    <div className="text-center mb-3 mt-5">
                                        <span className="date-title text-center badge rounded-pill bg-light text-dark">{datetwoString}</span>
                                    </div>
                                    <div className="card vaccine-data bg-transparent m-2 h-100">
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
