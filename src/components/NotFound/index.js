import React from 'react';
import { translate, Interpolate } from 'react-i18next';

const NotFound = (props) => {

    const {t} = props;

    return (
        <div className="container">
            <h1>{ t('title') }</h1>
            <p>
                { t('message') }
            </p>
        </div>
    )
}

export default translate(['NotFound', 'common'])(NotFound)
