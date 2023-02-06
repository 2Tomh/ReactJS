import { Modal } from "@mui/material";

const CustomModal = (props) => {
    console.log(props)
    return (
        <Modal open={props.open} className="slide-top" style={{height:'112vh'}}>
            <div style={{ ...styles, ...props.modalStyles }} className="modalContainer">
                {props.children}
            </div>
        </Modal>
    )
};

const styles = {
    width: "1050px",
    height: "637px",
    background: "white",
    bottom: "0",
    right: "50%",
    transform: "translate(-50%, 0)",
    left: "50%",
    position: "fixed",
    outline: "none",
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 55.91%, rgba(0, 0, 0, 0.2) 100%), #FFFFFF',
    boxShadow: 'inset 0px 20px 50px rgba(255, 255, 255, 0.1)',
}
export default CustomModal;