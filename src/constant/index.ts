export const ZH_CH = 'zh-CN';

export const EN_US = 'en-US';

export const ZH_HK = 'zh-HK';

export const LOCAL_LANG_STR = '__lang__';

export const LOCAL_LANG = (localStorage.getItem(LOCAL_LANG_STR) || navigator.language) as LangKeyT;

export type LangKeyT = 'zh-CN' | 'en-US' | 'zh-HK';
