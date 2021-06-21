import React from 'react'

const Booked = () => {
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-5">
                            <div className="success-checkmark">
                                <div className="check-icon">
                                    <span className="icon-line line-tip"></span>
                                    <span className="icon-line line-long"></span>
                                    <div className="icon-circle"></div>
                                    <div className="icon-fix"></div>
                                </div>
                            </div>
                            <div className="success-book text-center">
                                <h4 className="success-text-primary">Congratulations</h4>
                                <p className="success-text-secondary">You have successfully booked vaccine dose!!</p>
                                <button type="button" className="book-btn confirmed text-white my-4" data-bs-dismiss="modal" >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booked
