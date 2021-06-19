import React from "react";

export default function SubmitButton(props) {
  const { t, handleSubmit } = props;

  return (
    <button
      className="green-button"
      onClick={() => {
        handleSubmit();
      }}
    >
      {t.questionBox.buttons.submit.label}
    </button>
  );
}
