const DeleteModal = () => {
    return (
        <div className="modal-box text-center back-wh">
            <div className="modal-box-body">
                <div className="mb-40">
                    <h3>Are you sure you want to Remove Emily?</h3>
                    <p>Once Emily is removed all her data will be deleted</p>
                </div>
            </div>
            <div className="modal-box-footer">
                <button type="button" className="btn btn-red w-100 sm">Delete</button>
            </div>
        </div>
    )
};

export default DeleteModal;