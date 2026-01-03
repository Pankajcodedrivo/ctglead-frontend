const NotesModal = () => {
    return (
        <div className="modal-box text-center back-wh modal-box-lg">
            <div className="modal-box-body">
                <div className="mb-32">
                    <div className="mb-4">
                        <h3 className="mb-0 text-start">Notes for Sarah Johnson</h3>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">Producer</label>
                                    <select name="" id="" className="form-control">
                                        <option value="1">Select</option>
                                        <option value="2">Select</option>
                                        <option value="3">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">Subject</label>
                                    <input type="text" className="form-control"  placeholder="Provide a brief subject line." />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label className="form-label float">Notes</label>
                                    <textarea className="form-control"  placeholder="Write your notes or comments ..."></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <div className="modal-inner-box mb-3">
                                    <h4>Coverage Change</h4>
                                    <ul>
                                        <li>Selena R</li>
                                        <li>03/12/2025</li>
                                        <li>2:01 pm</li>
                                    </ul>
                                    <p>Client wants to buy quote and make update.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="modal-inner-box mb-3">
                                    <h4>Underwriting</h4>
                                    <ul>
                                        <li>Selena L</li>
                                        <li>03/12/2025</li>
                                        <li>2:01 pm</li>
                                    </ul>
                                    <p>Review of clients driver license and prior insurance for better rate. Review of clients driver license and prior insurance for better rate. Review of clients driver license and prior insurance for better rate. Review of clients driver license and prior insurance for better rate.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="modal-inner-box">
                                    <h4>Follow-up</h4>
                                    <p>Reminder to call client next week.</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-box-footer save-footer-btn">
                <button type="button" className="btn btn-outline-grey sm">Cancel</button>
                <button type="button" className="btn btn-primary sm">Save</button>
            </div>
        </div>
    )
};

export default NotesModal;