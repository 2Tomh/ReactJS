import { colors, getCardActionsUtilityClass, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, deleteAnswer } from "../store/products";
import Answer from "./Answer";
import CustomModal from "./CustomModal";



const Form = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const products = useSelector((store)=> store.products)
  const dispatch = useDispatch()
  const [currentQuestion, setCurrentQuestion] = useState(products.questions[currentQuestionIndex]);

  const incrementQuestionIndex = () => {
    if (currentQuestionIndex >= products.questions.length - 1) return;
    setCurrentQuestion(products.questions[currentQuestionIndex + 1]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onClickAnswer = (answer) => {
    setIsClicked(true);
    dispatch(addAnswer(answer))
  };
  

  const onClickDelete =(index) =>{
    setIsClicked(true);
    dispatch(deleteAnswer(index))
};

  return (
    <form style={{maxWidth:'100%'}}>
          <h1 style={{textAlign:'center'}}> {currentQuestion.question}</h1>
        <div style={styles.choices} className="formDiv">
      {products.choices.map((answer, index) => (
        <div key={index} style={styles.circle} onClick={()=>onClickDelete(index)}>
          <img src={answer.image} style={styles.circleImage} />
          <p >{answer.value}</p>
        </div>
      ))}
      </div>
      <div style={styles.answersContainer} className="answerContainer">
        {currentQuestion.answers.map((answer, index) => (
          <Answer key={index} value={answer} onclick={onClickAnswer} />
        ))}
      </div>
      <div style={styles.bottomModal}>
        {isClicked ? (
          <>
            <button className="buttons" type="button" onClick={incrementQuestionIndex}>
              Next
            </button>
            <button className="buttons">See Result</button>
          </>
        ) : (
          <button className="buttons">I WANT SOMETHING ELSE</button>
        )}
      </div>
    </form>
  );
};

const styles = {
  answersContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "7px",
  },
  choices:{
    display:'flex',
    gap:'23px'
  },
  circle:{
    borderRadius:'50px',
    width:'94px',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  },
  circleImage:{
    width:'94px',
    height:'94px',
    borderRadius:'inherit'
  },
  bottomModal: {
    height: "80px",
    borderRadius: "24px 24px 0 0",
    width: "100%",
    background: "black",
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:'5px'
  },
};
export default Form;