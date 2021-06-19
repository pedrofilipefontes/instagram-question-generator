import React from "react";

function CategoryButton(props) {
  const { t, updateTopic } = props;
  const topicOptions = t.questionBox.buttons.category.options;

  return (
    <div>
      <select
        className="green-button select-option"
        onChange={(event) => {
          updateTopic(event.target.value);
        }}
      >
        <option value="defaultTopic">
          {t.questionBox.buttons.category.label}
        </option>
        {topicOptions.map((option, index) => {
          return (
            <option value={option.value} key={index + 1}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CategoryButton;
