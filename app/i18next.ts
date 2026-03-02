import { createInstance, i18n, Resource } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from '@/i18nConfig';


const loadResource = (language: string, namespace: string) => {
  let loader;
  switch (language) {
    case 'en':
      switch (namespace) {
        case 'default': loader = import('@/locales/en/default.json'); break;
        case 'hero_02': loader = import('@/locales/en/hero_02.json'); break;
        case 'projects': loader = import('@/locales/en/projects.json'); break;
        case 'reviews': loader = import('@/locales/en/reviews.json'); break;
        case 'skills': loader = import('@/locales/en/skills.json'); break;
        default: loader = import(`@/locales/en/${namespace}.json`); break;
      }
      break;
    case 'bg':
      switch (namespace) {
        case 'default': loader = import('@/locales/bg/default.json'); break;
        case 'hero_02': loader = import('@/locales/bg/hero_02.json'); break;
        case 'projects': loader = import('@/locales/bg/projects.json'); break;
        case 'reviews': loader = import('@/locales/bg/reviews.json'); break;
        case 'skills': loader = import('@/locales/bg/skills.json'); break;
        default: loader = import(`@/locales/bg/${namespace}.json`); break;
      }
      break;
    default:
      loader = import(`@/locales/${language}/${namespace}.json`);
  }
  
  return loader
    .then((module) => module.default || module)
    .catch((error) => {
      console.error(`Failed to load translation: ${language}/${namespace}`, error);
      return {};
    });
};

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: Resource
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) => loadResource(language, namespace)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales
  });

  return {
    i18n: i18nInstance,
    resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
    t: i18nInstance.t
  };
}
