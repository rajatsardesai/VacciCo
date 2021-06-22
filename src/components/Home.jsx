import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {

    const [states, setStates] = useState([]);

    const [statesData, setStatesData] = useState('');

    useEffect(() => {
        async function getData() {
            const statesData = await axios.get('https://api.covid19india.org/data.json');
            setStates(statesData.data.statewise);
        }

        getData();
    }, []);

    return (
        <>

            <div className="header">
                <div className="circle-grp">
                    <img src={process.env.PUBLIC_URL + "/img/circle__l-sm.svg"} className="circle-small" alt="circle-small" />
                    <img src={process.env.PUBLIC_URL + "/img/circle__l-md.svg"} className="circle-medium" alt="circle-medium" />
                    <img src={process.env.PUBLIC_URL + "/img/circle__l-lg.svg"} className="circle-large" alt="circle-large" />
                </div>

                <div className="corona-img-top">
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona-two translate" />
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona-three translate" />
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona-four translate" />
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona-five translate" />
                </div>

                <div className="container mt-5 pt-4">
                    <div className="d-flex align-items-center justify-content-center w-100 heading-bubble">
                        <div className="heading-text">
                            <h1 className="text-white heading-text--primary">Let's Help<br /> Recover the Earth, <br /><span className="heading-text--primary heading-text--primary_color">Start From Us!</span></h1>
                            <p className="text-white heading-text--secondary">Getting Vaccinated is the key<br /> to break this virus chain</p>
                            <Link type="button" className="btn-vaccine text-white" to="/get-vaccinated">Get Vaccinated</Link>
                        </div>
                        <div className="heading-img w-50 text-end">
                            <div className="earth"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="covid-data">
                <div className="bubble">
                    <img src={process.env.PUBLIC_URL + "/img/circle__r.svg"} alt="circle-right" className="circle-right" />
                </div>

                <div className="corona-img-bottom">
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona translate" />
                    <img src={process.env.PUBLIC_URL + "/img/corona.svg"} alt="corona" className="corona-one translate" />
                </div>

                <div className="mars-bubble">
                    <img src={process.env.PUBLIC_URL + "/img/mars.png"} alt="mars" className="mars-img" />
                </div>

                <div className="d-flex flex-column mars-content">
                    <div className="container">
                        <h3 className="tracker-title text-center">India Covid - 19 Tracker</h3>
                        <div className="form-state">
                            <select className="form-select form-data bg-transparent text-white" aria-label="Default select example" value={statesData} onChange={(event) => {
                                setStatesData(event.target.value);
                            }}>
                                <option className="text-dark">Select State</option>
                                {
                                    states.map((currElem, index) => {
                                        return (
                                            <option className="text-dark" value={index}>{currElem.state}</option>
                                        )
                                    }
                                    )
                                }
                            </select>
                        </div>


                        <div className="container py-5">
                            <div className="d-flex flex-wrap justify-content-around">

                                {
                                    states.map((currElem, index) => {
                                        return (
                                            index == statesData && statesData != '' ?
                                                <>
                                                    <Card id={index} active={currElem.active} deaths={currElem.deaths} recovered={currElem.recovered} confirmed={currElem.confirmed} />
                                                </>
                                                :
                                                null
                                        )

                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
