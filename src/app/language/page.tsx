"use client"

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from '../../../i18n';
import LanguageSwitcher from "@/components/i18_test/LanguageSwitcher";
import MyComponent from "@/components/i18_test/language";


async function FirstPost() {
  useEffect(() => {
    import('../../components/locales/en.json').then((en) => {
      i18n.addResourceBundle('en', 'translation', en.default);
    });
    import('../../components/locales/vi.json').then((vn) => {
      i18n.addResourceBundle('vn', 'translation', vn.default);
    });
    import('../../components/locales/ja.json').then((jp) => {
      i18n.addResourceBundle('jp', 'translation', jp.default);
    });
  }, []);

  return (
    <>
      
      <br></br>

      <div>
        <MyComponent />
        <LanguageSwitcher />
      </div>
    </>
  )
}

export default FirstPost;