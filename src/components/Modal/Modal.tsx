import React from "react";
import ModalBody, {ModalBodyProps} from "./ModalBody";

const Modal: React.FC<ModalBodyProps> = (props) => <>{props.isOpened && <ModalBody {...props}/>}</>

export default Modal;