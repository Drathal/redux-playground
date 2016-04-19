import React from 'react';
import { render } from 'react-dom'
import { translate, Interpolate } from 'react-i18next';

const NotFound = (props) => {

    const {t} = props;

    return (
        <div className="container">
            <h1>{ t('title') }</h1>
            <p dangerouslySetInnerHTML={ {__html: t('message')} } />
        </div>
    )
}

export default translate(['NotFound', 'common'])(NotFound)
