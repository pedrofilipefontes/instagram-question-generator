import React, { useState } from "react";
import axios from "axios";

import QuestionStage from "./../atoms/QuestionStage";
import SubmitButton from "../atoms/SubmitButton";
import CategoryButton from "../atoms/CategoryButton";

export default function QuestionBox(props) {
  const { lang, t } = props;

  const defaultConfig = {
    lang: lang,
    isLoading: false,
    chosenTopic: "defaultTopic",
    question: null,
    questionColor: "#308063",
  };

  const [boxConfig, setConfig] = useState(defaultConfig);

  const handleSubmit = async () => {
    if (boxConfig.chosenTopic === "defaultTopic") {
      alert(t.questionBox.buttons.category.validation.noPick);
    } else {
      setConfig({ ...boxConfig, isLoading: true });
      await axios
        .get(
          process.env.REACT_APP_QUESTIONS_API +
            `${lang}/${boxConfig.chosenTopic}`
        )
        .then((res) => {
          setConfig({
            ...boxConfig,
            isLoading: false,
            question: res.data,
            questionColor: "black",
          });
        })
        .catch((err) => {
          alert("Ops desculpa... Parece que algo deu errado! ");
          setConfig({ ...boxConfig, isLoading: false });
        });
    }
  };

  const updateTopic = async (chosenTopic) => {
    await setConfig({ ...boxConfig, chosenTopic: chosenTopic });
  };

  return (
    <div id="questionBox">
      <div id="questionStage">
        <QuestionStage
          questionColor={boxConfig.questionColor}
          question={boxConfig.question}
          t={t}
          isLoading={boxConfig.isLoading}
        />
      </div>
      <div id="buttonRow">
        <div className="grid-column">
          <CategoryButton updateTopic={updateTopic} t={t} />
        </div>
        <div className="grid-column">
          <SubmitButton t={t} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
