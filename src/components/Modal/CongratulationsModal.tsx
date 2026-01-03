const CongratulationsModal = () => {
    return (
        <div className="modal-box text-center back-image">
            <div className="modal-box-body">
                <div className="mb-40">
                    <h3 className="color-blue mb-3 lg">Congratulations!</h3>
                    <p className="font-24">This policy has been successfully sold.</p>
                </div>
                <button type="button" className="btn green-btn md">Add Another Policy +</button>
            </div>
        </div>
    )
};

export default CongratulationsModal;