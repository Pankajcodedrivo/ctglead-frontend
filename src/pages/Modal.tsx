import AddMember from "../components/Modal/AddMember";
import CongratulationsModal from "../components/Modal/CongratulationsModal";
import DeclineQuote from "../components/Modal/DeclineQuote";
import DeleteModal from "../components/Modal/DeleteModal";
import NotesModal from "../components/Modal/NotesModal";

const Modal = () => {
    return (
        <>
            <CongratulationsModal />
            <DeclineQuote />
            <DeleteModal />
            <AddMember />
            <NotesModal />
        </>
    )
};

export default Modal;