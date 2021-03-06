import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const Navbar = (props) => {
    return (
        <>
            <LoadingBar color='#e51a5a' ref={props.refer} />
            <div className="container-lg navbubble">
                <nav className="navbar navbar-expand-lg mt-3 navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#"><img className="logo" src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="Syringe" /></a>
                        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link text-white mx-lg-3 my-sm-2 px-3" activeClassName="active-class" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link text-white mx-lg-3 my-sm-2 px-3" activeClassName="active-class" to="/get-vaccinated">Get Vaccinated</NavLink>
                                </li>
                            </ul>
                            <NavLink className="btn-login text-white text-center my-lg-0 my-sm-2" to="/">Log out</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
