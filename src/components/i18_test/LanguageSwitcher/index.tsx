'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vn')}>Tiếng Việt</button>
      <button onClick={() => changeLanguage('jp')}>日本語</button>
    </div>
  );
}

export default LanguageSwitcher;