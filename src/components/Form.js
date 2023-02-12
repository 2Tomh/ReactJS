import { colors, getCardActionsUtilityClass, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, deleteAnswer } from "../store/products";
import Answer from "./Answer";
import CustomModal from "./CustomModal";
import ImprovementTitle from "./ImprovementTitle";

const Form = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(
    products.questions[currentQuestionIndex]
  );

  const incrementQuestionIndex = () => {
    if (currentQuestionIndex >= products.questions.length - 1) return;
    setCurrentQuestion(products.questions[currentQuestionIndex + 1]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onClickAnswer = (answer) => {
    setIsClicked(true);
    dispatch(addAnswer(answer));
  };

  const onClickDelete = (index) => {
    setIsClicked(true);
    dispatch(deleteAnswer(index));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      const isMobileDisplay = document.body.clientWidth < 560;
      setIsMobile(isMobileDisplay);
    });
  }, []);

  return (
    <form className="form">
      {!isMobile && <ImprovementTitle />}
      <h1 style={styles.questionTitle}> {currentQuestion.question}</h1>
      <div style={styles.choices} className="formDiv">
        {products.choices.map((answer, index) => (
          <div
            key={index}
            style={styles.circle}
            onClick={() => onClickDelete(index)}
          >
            <div style={styles.deleteAnswer}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.5"
                  cy="9.5"
                  r="9.25"
                  fill="white"
                  stroke="#D9D9D9"
                  stroke-width="0.5"
                />
                <path
                  d="M13 6L9.5 9.5M6 13L9.5 9.5M9.5 9.5L6 6L13 13"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img src={answer.image} style={styles.circleImage} />
            <p>{answer.value}</p>
          </div>
        ))}
      </div>
      <div style={styles.answersContainer} className="answerContainer">
        {currentQuestion.answers.map((answer, index) => (
          <Answer key={index} value={answer} onclick={onClickAnswer} />
        ))}
      </div>
      <div style={styles.bottomModal} className="bottomModal">
        {isMobile &&<ImprovementTitle />}
        {isClicked ? (
          <>
            <button
              className="buttons small-button"
              type="button"
              onClick={incrementQuestionIndex}
              style={styles.button}
            >
              Next
            </button>
            <button style={styles.button} className="buttons small-button">
              See Result
            </button>
          </>
        ) : (
          <button style={styles.button} className="buttons large-button">
            I WANT SOMETHING ELSE
          </button>
        )}
      </div>
    </form>
  );
};

const styles = {
  button: {
    marginRight: "50px",
  },
  questionTitle: {
    textAlign: "center",
  },
  answersContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "7px",
  },
  choices: {
    display: "flex",
    gap: "23px",
  },
  circle: {
    borderRadius: "50px",
    width: "94px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  circleImage: {
    width: "94px",
    height: "94px",
    borderRadius: "inherit",
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
    justifyContent: "flex-end",
    gap: "5px",
  },
  deleteAnswer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "60%",
  },
};
export default Form;
