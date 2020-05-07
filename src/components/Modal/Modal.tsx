import React, { useEffect, useRef } from "react";
import "./Modal.css";
import Emoji from "../Emoji";
// https://www.w3.org/TR/wai-aria-practices/#dialog_modal

export interface ModalProps{
    isOpened: boolean
    handleClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    children?: React.ReactNode
}

// needs to be drag and drop (header)
const Modal: React.FC<ModalProps> = ({isOpened, handleClose, children}) => {
    const modalRef = useRef<HTMLDivElement>(document.createElement("div")); //quickfix

    useEffect(() => {
        const clickOutOfModal = (e: MouseEvent) => {
            if(modalRef.current && !modalRef.current.contains(e.target as Node))
                handleClose();
        };

        const escapeModal = (e: KeyboardEvent) => {
            if(e.key === "Escape")
                handleClose();
        };

        if(isOpened){
            document.addEventListener("click", clickOutOfModal);
            document.addEventListener("keydown", escapeModal);
        }

        return () => { 
            document.removeEventListener("click", clickOutOfModal);
            document.removeEventListener("keydown", escapeModal);
        };
    }, [isOpened, handleClose]);

    if(!isOpened) return null;
    return (
        <div className="modal-container" ref={modalRef}>
            <div style={styles.headerBar}>
                <h3 style={styles.header}>Modal</h3>
                <div style={styles.close} onClick={handleClose} title="Close">
                    <Emoji symbol="✖️" label="close modal"/>
                </div>
            </div>
            <section>
                {children}
            </section>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    headerBar: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "2rem",
        borderRadius: "5px",
        backgroundColor: "#2a2a2a"
    },
    header: {
        margin : "0",
        marginLeft: "10px"
    },
    close: {
        textAlign: "center" as const,
        fontSize: "12px",
        width: "1rem",
        height: "1rem",
        padding: "2px",
        margin: "2px",
        backgroundColor: "#7695aa",
        borderRadius: "3px",
        cursor: "pointer",
    }
};

export default Modal;