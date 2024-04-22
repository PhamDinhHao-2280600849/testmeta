'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcomeMessage')}</h1>
      <p>{t('about')}</p>
      <p>{t('contact')}</p>
    </div>
  );
}

export default MyComponent;