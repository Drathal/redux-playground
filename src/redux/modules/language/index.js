import { SET_LANGAUAGE, SET_LANGAUAGES } from './actions';

export const initialState = {
    current: 'en',
    available: ['en', 'de']
}

/**
 * main product reducer
 */
export default (state = initialState, action) => {

    const isAvailableLanguage = (language_code) => state.available && state.available.filter((i => i === language_code)).length > 0

    switch (action.type) {
        case SET_LANGAUAGE:
            if (!isAvailableLanguage(action.language_code)) return state
            return {
                ...state,
                current: action.language_code
            }
        default:
            return state
    }
}
