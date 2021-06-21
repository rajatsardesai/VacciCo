import React from 'react'

const VaccineCard = (props) => {
    return (
        <>
            <div className="book-slot my-3 p-3">
                <div className="text-center my-4 py-2">
                    <span className="date-title text-center badge rounded-pill bg-light text-dark">{props.date}</span>
                </div>
                <p className="hospital-title text-center text-white">{props.vaccineName}</p>
                <p className="hospital-title text-center text-white">{props.age}</p>
                {
                    ((props.availCapacity) === 0) ?
                        <button className="book-btn booked text-white">Booked</button>
                        :
                        ((props.availCapacity) <= 10) ?
                            <button className="book-btn limited-available" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Limited Available</button>
                            :
                            <button type="button" className="book-btn available" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Available</button>
                }
            </div>
        </>

    )
}

export default VaccineCard
