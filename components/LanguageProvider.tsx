'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type LanguageCode = 'en' | 'de' | 'fr' | 'es';

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const isValidLanguage = (
  value: string | null
): value is LanguageCode => {
  return (
    value === 'en' ||
    value === 'de' ||
    value === 'fr' ||
    value === 'es'
  );
};

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] =
    useState<LanguageCode>('en');

  useEffect(() => {
    const saved = localStorage.getItem(
      'kilimanjaro-language'
    );

    const currentLanguage: LanguageCode =
      isValidLanguage(saved) ? saved : 'en';

    setLanguageState(currentLanguage);

    document.documentElement.lang = currentLanguage;

    // Prevent browser/Google Translate from translating
    // the website automatically.
    document.documentElement.setAttribute(
      'translate',
      'no'
    );
  }, []);

  const setLanguage = (newLanguage: LanguageCode) => {
    setLanguageState(newLanguage);

    localStorage.setItem(
      'kilimanjaro-language',
      newLanguage
    );

    document.documentElement.lang = newLanguage;

    // Keep automatic browser translation disabled.
    document.documentElement.setAttribute(
      'translate',
      'no'
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    );
  }

  return context;
}