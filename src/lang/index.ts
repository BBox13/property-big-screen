// 自定义国际化配置
import { createI18n } from 'vue-i18n';

// 本地语言包
import enUSLocale from './en_US';
import zhCNLocale from './zh_CN';

const messages = {
  zh_CN: {
    ...zhCNLocale
  },
  en_US: {
    ...enUSLocale
  }
};

/**
 * 获取当前语言
 * @returns zh-cn|en ...
 */
export const getLanguage = () => {
  const language = useStorage('language', 'zh_CN');
  if (language.value) {
    return language.value;
  }
  return 'zh_CN';
};

export const setLanguage = (lang: App.I18n.LangType) => {
  i18n.global.locale.value = lang;
};

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages
});

export const $t = i18n.global.t as App.I18n.$T;

export default i18n;
