import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

function QuestionStage(props) {
  const { t, isLoading, question, questionColor } = props;

  function QuestionAndCopy(props) {
    const { question } = props;

    const copyQuestion = () => {
      const copyQuestion = `${question[0]}${question
        .substring(1)
        .toLocaleLowerCase()}`;
      navigator.clipboard.writeText(copyQuestion);
      alert(t.general.copiedNotification);
    };

    return (
      <>
        <div id="stageText">{question}</div>
        <br />
        <div
          id="copyButton"
          onClick={() => {
            copyQuestion();
          }}
        >
          <a href="instagram://">
            <FontAwesomeIcon icon={faCopy} style={{ color: "black" }} />{" "}
            {t.general.copyQuestion}
          </a>
        </div>
      </>
    );
  }

  return (
    <div>
      <p hidden={isLoading} style={{ color: questionColor }}>
        {question
          ? QuestionAndCopy({ question })
          : t.questionBox.questionStagePlaceholder}
      </p>
      <LoadingSpinner isLoading={isLoading} />
    </div>
  );
}

export default QuestionStage;
