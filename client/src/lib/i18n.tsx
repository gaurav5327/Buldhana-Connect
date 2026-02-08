import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'mr' | 'en';

const STORAGE_KEY = 'site_lang';

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (mr: string, en?: string) => string;
}>({
  lang: 'mr',
  setLang: () => {},
  t: (mr) => mr,
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return (v === 'en' ? 'en' : 'mr') as Lang;
    } catch (e) {
      return 'mr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (mr: string, en?: string) => {
    if (lang === 'en') return en ?? mr;
    return mr;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

export default I18nContext;
