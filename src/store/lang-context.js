import React, { useState } from 'react';

const LangContext = React.createContext({
    lang: '',
    setLanguage: () => {}
  });

export const LangContextProvider = (props) => {
  const [lang, setLanguage] = useState('en')

  const setLanguageHandler = (lang) => {
    setLanguage(lang)
  }

  const contextValue = {
    lang: lang,
    setLanguage: setLanguageHandler,
  };

  console.log(lang);

  return (
    <LangContext.Provider value={contextValue}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContext;