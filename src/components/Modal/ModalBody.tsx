import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Emoji from "../Emoji";
// https://www.w3.org/TR/wai-aria-practices/#dialog_modal

export interface ModalBodyProps{
    isOpened: boolean
    handleClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    title: string
    style? : React.CSSProperties
    children?: React.ReactNode
}

const ModalBody: React.FC<ModalBodyProps> = ({isOpened, handleClose, title, style, children}) => {
    const [modalRoot] = useState(() => {
        const root = document.createElement("div");
        root.setAttribute("class", "modal-root");
        
        return root;
    });
    const modalRef = useRef<HTMLDivElement>(null);
    // Drag
    const [isMoving, setIsMoving] = useState<boolean>(false); // maybe reducer?
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    
    //debug
    const [ID] = useState(Math.floor(Math.random()*1000));
    const debugMode: boolean = true;
    const debug = React.useCallback((msg: any) => debugMode ? console.log(msg, ID) : null, [debugMode, ID]);

    useEffect(() => {
        debug("mounted"); // debug
        document.body.appendChild(modalRoot);

        // HERE IS THE PROBLEM
        const clickOutOfModal = (e: MouseEvent) => {
            const clickOutsideModal =  modalRef.current && !modalRef.current.contains(e.target as Node);
            const clickInsideOtherModal = Array.from(document.querySelectorAll("div.modal-root")).some(modal => modal.contains(e.target as Node));

            if(clickOutsideModal && !clickInsideOtherModal)
                handleClose();
        };

        const escapeModal = (e: KeyboardEvent) => {
            if(e.key === "Escape")
                handleClose();
        };

        document.addEventListener("click", clickOutOfModal);
        document.addEventListener("keydown", escapeModal);


        return () => {
            // setX(0); setY(0);
            document.removeEventListener("click", clickOutOfModal);
            document.removeEventListener("keydown", escapeModal);
            document.body.removeChild(modalRoot);
            debug("unmounted"); // debug
        };
    }, [modalRoot, handleClose, debug]); // debug


    // Drag handling, still displaced a little bit
    const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
        setIsMoving(true);
        // quickfix, null is not of type Element
        e.dataTransfer.setDragImage(document.createElement("div"), 0, 0); 
    };

    const drag = (e: React.DragEvent<HTMLDivElement>) => {
        // const offset = -(isMoving ? 500*0.5 : 0); //  - width*0.5

        if(modalRef.current){
            // const el = modalRef.current.getBoundingClientRect();
            // setX(e.pageX - el.left*0.5);
            // setY(e.pageY - el.top*0.5);

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


    if(!isOpened) return null; // header draggable tho it needs to move whole container
    return ReactDOM.createPortal(
        <div className="modal-container" ref={modalRef} style={{...style, ...{transform: `translate(${x}px, ${y}px)`}}}>
            <div style={styles.headerBar} draggable onDragStart={dragStart} onDrag={drag} onDragEnd={dragEnd}>
                <h3 style={styles.header}>
                    {title} {ID /*debug ID*/}
                </h3>
                <div style={styles.close} onClick={handleClose} title="Close">
                    <Emoji symbol="✖️" label="close modal"/>
                </div>
            </div>
            <section style={styles.modalBody}>
                {children}
            </section>
        </div>
    , modalRoot);
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

export default ModalBody;