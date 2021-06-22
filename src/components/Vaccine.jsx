import React, { useReducer, useEffect } from 'react';
import VaccineData from './VaccineData';
import axios from 'axios';

const initialState = {
    statesData: [],
    stateValue: '',
    districtValue: '',
    districtsData: [],
    vaccineData: []
};

var date = new Date(); // M-D-YYYY

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

var dateString = (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;

const Vaccine = () => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'STATESDATA':
                return { ...state, statesData: action.payload }
            case 'SELECTSTATE':
                return { ...state, stateValue: action.payload }
            case 'SELECTDISTRICT':
                return { ...state, districtValue: action.payload }
            case 'DISTRICTSDATA':
                return { ...state, districtsData: action.payload }
            case 'VACCINEDATA':
                return { ...state, vaccineData: action.payload }
            default: return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { statesData, stateValue, districtValue, districtsData, vaccineData } = state;

    async function getState() {
        const statesData = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states',
            {
                headers: {
                    'Content-Type': 'state',
                }
            });
        dispatch({ type: 'STATESDATA', payload: statesData.data.states });
    }

    async function getDistrict() {
        const districtsData = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateValue}`,
            {
                headers: {
                    'Content-Type': 'districts',
                }
            });
        dispatch({ type: 'DISTRICTSDATA', payload: districtsData.data.districts });
    }

    async function getVaccine() {
        const vaccineData = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict`,
            {
                params: {
                    district_id: districtValue,
                    date: dateString
                },
                headers: {
                    'Content-Type': 'vaccine',
                }
            });
        dispatch({ type: 'VACCINEDATA', payload: vaccineData.data.centers });
    };


    useEffect(() => {
        getState();
        getDistrict();
        getVaccine();
    }, [stateValue, districtValue]);

    return (
        <>
            <div className="circle-grp">
                <img src={process.env.PUBLIC_URL + "/img/circle__l-sm.svg"} className="circle-small" alt="circle-small" />
                <img src={process.env.PUBLIC_URL + "/img/circle__l-md.svg"} className="circle-medium" alt="circle-medium" />
                <img src={process.env.PUBLIC_URL + "/img/circle__l-lg.svg"} className="circle-large" alt="circle-large" />
            </div>

            <form onSubmit={getVaccine}>
                <div className="container d-flex justify-content-center align-items-center mt-5 pt-4 flex-sm-column flex-column flex-lg-row">
                    <select className="form-select vaccine-form bg-transparent mx-lg-4 my-sm-4 my-4 text-white" aria-label="Default select example" value={stateValue} onChange={(event) => dispatch({ type: 'SELECTSTATE', payload: event.target.value })}>
                        <option className="text-dark">Search State</option>

                        {
                            statesData.map((currElem, index) => {
                                return (
                                    <option className="text-dark" key={index} value={currElem.state_id}>{currElem.state_name}</option>
                                )
                            })
                        }
                    </select>


                    <select className="form-select vaccine-form bg-transparent text-white mx-lg-4 my-sm-4 my-4" aria-label="Default select example" value={districtValue} onChange={(event) => dispatch({ type: 'SELECTDISTRICT', payload: event.target.value })}>
                        <option className="text-dark">Search District</option>
                        {
                            districtsData.map((currElem, index) => {
                                return (
                                    <option className="text-dark" key={index} value={currElem.district_id}>{currElem.district_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </form>



            {
                ((stateValue === '') && (districtValue === '')) ?
                    <>
                        <div className="container mt-5">
                            <div className="jumbotron text-center border rounded p-5">
                                <h4 className="display-4 text-light">How it Works</h4>
                                <div className="d-flex flex-lg-row flex-sm-column flex-column align-items-center w-100">
                                    <div className="w-50 mt-5">
                                        <img src={process.env.PUBLIC_URL + "/img/location.svg"} className="hiw-img" alt="CHOOSE VACCINE LOCATION" />
                                        <p className="hiw-text-primary text-light mt-5">CHOOSE VACCINE LOCATION</p>
                                        <p className="hiw-text-secondary text-light">Select your nearby Vaccine Center for vaccination</p>
                                    </div>
                                    <div className="w-50 mt-5">
                                        <img src={process.env.PUBLIC_URL + "/img/slot.svg"} className="hiw-img" alt="CHOOSE VACCINE LOCATION" />
                                        <p className="hiw-text-primary text-light mt-5">CONFIRM YOUR SLOT</p>
                                        <p className="hiw-text-secondary text-light">Book your slot to Get Vaccine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="container my-3">
                            <p className="text-white text-center">NOTE : The slots availability data displayed in the pincode or district search is provided by the state govt and private hospitals. The total availability slots includes Dose-1 and Dose-2 slots. While we have real-time data, slot availability on CoWin changes rapidly. D1: Dose 1, D2: Dose 2

                                On-site registration and vaccination services are now available

                                At all vaccination centers – both Government and Private.

                                For all people aged 18 years or above.

                                For slot availability and timing, please contact the vaccination center directly.

                                However, it is recommended that you book your appointment online for convenience</p>
                        </div>
                    </>
            }


            <VaccineData vaccineData={vaccineData} date={dateString} />

            <div className="bubble">
                <img src={process.env.PUBLIC_URL + "/img/circle__r.svg"} alt="circle-right" className="circle-right-vaccine" />
            </div>
        </>

    )
}

export default Vaccine
