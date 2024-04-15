import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const Login = (props) => {

    let regex = /^[0-9]{9}$/;
    const [number, setNumber] = useState("");
    const [res, setRes] = useState("");
    // const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [validation, setValidation] = useState(false);
    const [otpValidation, setOtpValidation] = useState("");
    const [counter, setCounter] = useState(180);
    const [isActive, setIsActive] = useState(false);

    // let one, two, three, four, five, six;
    // const x = one + two + three + four + five + six;

    // Make a request for a user with a given ID
    // async function Otpverify() {
    //     await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',
    //         {
    //             otp: sha256(x),
    //             txnId: res

    //         })
    //         .then(function (response) {
    //             setToken(response.request.response)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const handleChange = (e) => {
        setOtpValidation(e.target.value);
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {

            // It should not be last input field
            if (fieldIntIndex < 6) {

                // Get the next input field using it's name
                const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                );

                // If found, focus the next field
                if (nextfield !== null) {
                    nextfield.focus();
                }
            }
        }
    }

    async function otpcreate() {
        // Make a request for a user with a given ID
        await axios.post('https://cdndemo-api.co-vin.in/api/v2/auth/generateMobileOTP',
            {
                mobile: number
            })
            .then(function (response) {
                setRes(response.data.txnId)
            })
            .catch(function (error) {
                setError(error);
            });

    }

    const validationNum = () => {
        if (regex.test(number)) {
            document.getElementById('abc').classList.remove('is-invalid', 'border-danger');
            setValidation(false);
        }
        else {
            document.getElementById('abc').classList.add('is-invalid', 'border-danger');
            setValidation(true);
        }
    }

    useEffect(() => {
        let timeout = null;

        if (isActive === true) {
            timeout = setInterval(() => {
                setCounter((counter) => counter - 1);
            }, 1000);

            if (counter === -1) {
                clearInterval(timeout);
            };
        };
        props.refer.current.complete();
    }, [isActive])



    return (
        <>
            <LoadingBar color='#e51a5a' ref={props.refer} />
            {
                error ?
                    <div className="alert alert-danger alert-dismissible fade show position-fixed top-0 start-0 w-100" role="alert">
                        Otp has already been sent.
                    </div>
                    : null
            }
            <div className="circle-grp">
                <img src={process.env.PUBLIC_URL + "/img/circle__l-sm.svg"} className="circle-small" alt="circle-small" />
                <img src={process.env.PUBLIC_URL + "/img/circle__l-md.svg"} className="circle-medium" alt="circle-medium" />
                <img src={process.env.PUBLIC_URL + "/img/circle__l-lg.svg"} className="circle-large" alt="circle-large" />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center login-bubble flex-md-column flex-lg-row" >
                <a className="navbar-brand-login text-white" href="/#"><img className="logo" src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="Syringe" /></a>
                <div className="w-50 login-img d-lg-block d-md-none d-none">
                    <div className="doctor-img-wrapper">
                        <img src={process.env.PUBLIC_URL + "/img/doctor.svg"} alt="doctor's img" className="doctor-img" />
                    </div>
                </div>
                <div className="w-50 d-flex flex-column justify-content-center align-items-center">
                    {res ?
                        <form className="w-lg-50 w-md-100 text-center login-resp">
                            <h3 className="my-5 login-text text-white">OTP VERIFICATION</h3>

                            <div id="otp" className="d-flex justify-content-center">
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-1" onChange={handleChange} />
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-2" onChange={handleChange} />
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-3" onChange={handleChange} />
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-4" onChange={handleChange} />
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-5" onChange={handleChange} />
                                <input class="mb-4 mx-2 text-center form-control otp-input bg-transparent text-white" type="text" maxlength="1" name="field-6" onChange={handleChange} />
                            </div>
                            {
                                (counter === -1) ? <a class="link-light pe-auto my-4" onClick={() => otpcreate()}>Resend OTP</a> : <p className="my-3 text-primary">{counter}</p>
                            }
                            <p className="text-white my-3">There might be some delay in receiving the OTP due to heavy traffic</p>
                            {
                                (otpValidation === '') ? <button type="button" className="btn-otp-disabled text-white" disabled>Verify & Proceed</button> : <Link type="button" className="btn-otp text-white" to="/home" onClick={() => props.refer.current.continuousStart()}>Verify & Proceed</Link>
                            }
                        </form>
                        :
                        <form className="w-lg-50 w-md-100 text-center login-resp">
                            <h3 className="my-5 login-text text-white">LOGIN</h3>
                            <input type="text" class="form-control mt-5 mb-3 get-otp-form bg-transparent text-white" id="abc" onChange={(e) => {
                                setNumber(e.target.value);
                                validationNum();
                            }} aria-describedby="validationServer03Feedback" required placeholder="Enter Your Mobile Number"></input>
                            <div id="validationServer03Feedback" className="invalid-feedback">
                                Please provide a valid mobile number.
                            </div>
                            {
                                (validation || number === '') ? <button className="btn-otp-disabled text-white mt-5" disabled>Get OTP</button> : <button type="button" className="btn-otp text-white mt-4" onClick={() => {
                                    otpcreate();
                                    setIsActive(true);
                                    props.refer.current.continuousStart();
                                }}>Get OTP</button>
                            }

                        </form>
                    }
                </div>


            </div>

        </>


    );
}

export default Login;
