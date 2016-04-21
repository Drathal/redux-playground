export const SET_LANGAUAGE = 'ui/SET_LANGAUAGE';
export const SET_LANGAUAGES = 'ui/SET_LANGAUAGES';

export function setLanguage(language_code) {
    return {type: SET_LANGAUAGE, language_code}
}

export function setLanguages(language_codes) {
    return {type: SET_LANGAUAGES, language_code}
}
