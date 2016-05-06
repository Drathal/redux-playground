import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';

const NotFound = (props) => {

    const { t } = props;

    return (
        <div className="container">
            <h1>{ t('title') }</h1>
            <p dangerouslySetInnerHTML={ { __html: t('message') } } />
        </div>
    )
}

NotFound.propTypes = {
    t: PropTypes.func.isRequired
}

export default translate(['NotFound', 'common'])(NotFound)
