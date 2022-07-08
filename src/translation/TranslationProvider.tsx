import React, { createContext, useState } from 'react';

import EN from './en.json';
import PL from './pl.json';

export enum LANGUAGE {
  EN = 'en',
  PL = 'pl',
}

export type TranslationContextType = {
  t: (key: string) => string;
  lang: LANGUAGE;
  setLang: React.Dispatch<React.SetStateAction<LANGUAGE>>;
};

export const TranslationContext = createContext<TranslationContextType | null>(
  null
);

export const languages = {
  en: EN,
  pl: PL,
};

const TranslationProvider = ({ children }: { children?: React.ReactNode }) => {
  const [lang, setLang] = useState(LANGUAGE.PL);

  const t = (key: string) => {
    const l = languages[lang as keyof typeof languages];
    return l[key as keyof typeof l] || key.toLowerCase();
  };
  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
