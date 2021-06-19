import React from "react";
import QuestionBox from "./components/molecules/QuestionBox";
import InstagramFollow from "./components/atoms/InstagramFollow";
import "./assets/css/App.css";

function App(props) {
  const { defaultLanguage, defaultTranslation } = props;

  const t = defaultTranslation;
  const lang = defaultLanguage;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t.general.languageSelection}
          <span
            role="img"
            aria-label="flag-br"
            onClick={() => {
              window.location.search = "?lang=pt";
            }}
          >
            🇧🇷
          </span>{" "}
          <span
            role="img"
            aria-label="flag-uk"
            onClick={() => {
              window.location.search = "?lang=en";
            }}
          >
            🇬🇧
          </span>
        </p>
      </header>
      <main>
        <h3>{t.general.mainIntro}</h3>
        <h1 id="mainTitle">{t.general.mainTitle}</h1>
        <QuestionBox lang={lang} t={t} />
        <h4 id="declaration">
          {t.general.lowerStatement[0]}{" "}
          <span role="img" aria-label="green-heart">
            &#x1F49A;
          </span>{" "}
          {t.general.lowerStatement[1]}
        </h4>
        <InstagramFollow t={t} />
      </main>
    </div>
  );
}

export default App;
