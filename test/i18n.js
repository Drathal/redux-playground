/**
 * mock i18n
 **/
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';

export default (translation) => {
    return i18n.use('en')
        .init({
            resources: {
                en: {...translation}
            },
            lng: 'en',
            fallbackLng: 'en',
            debug: false,
            interpolation: {
                escapeValue: false
            }
        });
};
