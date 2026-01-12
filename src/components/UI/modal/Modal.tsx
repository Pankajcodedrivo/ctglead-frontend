import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import classes from "./Modal.module.scss";
import Card from "../card/Card";
import Button from "../button/Button";

interface IBackdrop {
  onConfirm: () => void;
}

const Backdrop = ({ onConfirm }: IBackdrop) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

interface IModal {
  title: string;
  message: string;
  onConfirm: () => void;
}

const ModalOverlay = ({ title, message, onConfirm }: IModal) => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h3>{title}</h3>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button outline onClick={onConfirm}>
            {t("cancel")}
          </Button>
          <button className={classes.delete} onClick={onConfirm}>
            {t("delete")}
          </button>
        </footer>
      </div>
    </Card>
  );
};

const Modal = ({ title, message, onConfirm }: IModal) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const modalRoot = document.getElementById("overlay-root");

  if (!backdropRoot || !modalRoot) return null;

  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        backdropRoot
      )}
      {createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onConfirm={onConfirm}
        />,
        modalRoot
      )}
    </>
  );
};

export default Modal;
