import { useState } from "react";
import CustomModal from "./components/CustomModal";
import Form from "./components/Form";


const App = () => {
    const [isVisible, setIsVisible] = useState(true);
     return (
        <div >
            <CustomModal open={isVisible}>
                 <div style={styles.divContainer} className="formContainer">
                    <Form/>
                </div>
            </CustomModal>
        </div>
    )
};

const styles = {
    divContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "75px",
    },
};

export default App;
