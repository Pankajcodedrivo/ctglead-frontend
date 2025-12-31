const AddMember = () => {
    return (
        <div className="modal-box text-center back-wh width-lg">
            <div className="modal-box-body">
                <div className="mb-32 text-start">
                    <h3>Add Member</h3>
                    <p>Add a new team member to your workspace.</p>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">First Name*</label>
                                    <input type="text" className="form-control"  placeholder="Please enter name of the member." />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">Last Name*</label>
                                    <input type="text" className="form-control"  placeholder="Please enter name of the member." />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">Email Address*</label>
                                    <input type="email" className="form-control"  placeholder="Please enter email address." />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label className="form-label float">Phone Number <span>(Optional)</span></label>
                                    <input type="tel" className="form-control"  placeholder="Please enter phone number." />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="modal-box-footer w-75 m-auto">
                <button type="button" className="btn btn-primary w-100 sm">Add Member</button>
            </div>
        </div>
    )
};

export default AddMember;