import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";
import Emoji from "../Emoji";
// https://www.w3.org/TR/wai-aria-practices/#dialog_modal

export interface ModalProps{
    isOpened: boolean
    handleClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    title: string
    width?: number | string
    height?: number | string
    children?: React.ReactNode
}

// needs to be drag and drop (header)
const Modal: React.FC<ModalProps> = ({isOpened, handleClose, title, width, height, children}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isMoving, setIsMoving] = useState<boolean>(false);
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

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
            setX(0); setY(0);
            document.removeEventListener("click", clickOutOfModal);
            document.removeEventListener("keydown", escapeModal);
        };
    }, [isOpened, handleClose]);


    // Drag handling

    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        if(modalRef.current)
            e.dataTransfer.setDragImage(document.createElement("div"), 0, 0); // quickfix, null is not of type Element
    };

    const drag = (e: React.DragEvent<HTMLDivElement>) => {
        setIsMoving(true);

        // const offset = -(isMoving ? 500*0.5 : 0); //  - width*0.5

        if(modalRef.current){
            setX(e.pageX - (isMoving ? 500*0.5 : 0));
            setY(e.pageY - (isMoving ? 500*0.5 : 0));
        }
    };

    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setIsMoving(false);

        if(modalRef.current){
            setX(e.pageX - (isMoving ? 500*0.5 : 0));
            setY(e.pageY - (isMoving ? 500*0.5 : 0));
        }
    };


    const currentStyle = {
        ...(width && {width}),
        ...(height && {height}),
        transform: `translate(${x}px, ${y}px)`
    };


    if(!isOpened) return null; // header draggable tho it needs to move whole container
    return (
        <div className="modal-container" ref={modalRef} style={currentStyle}>
            <div style={styles.headerBar} draggable onDragStart={dragStart} onDrag={drag} onDragEnd={dragEnd}>
                <h3 style={styles.header}>
                    {title}
                </h3>
                <div style={styles.close} onClick={handleClose} title="Close">
                    <Emoji symbol="✖️" label="close modal"/>
                </div>
            </div>
            <section style={styles.modalBody}>
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
        borderRadius: "5px 5px 0px 0px",
        backgroundColor: "#2a2a2a",
        cursor: "grab"
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
    },
    modalBody: {
        padding: "10px"
    }
};

export default Modal;