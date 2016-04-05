import React, { PropTypes } from 'react'

const LayoutMain = (props) => {
    return (
        <div className="app">
            <h1>{ props.messages.title }</h1>
            <main>
                { props.children }
            </main>
        </div>
    )
}

LayoutMain.defaultProps = {
    messages: {
        title: 'LAYOUTMAIN_TITLE'
    }
};

LayoutMain.propTypes = {messages: PropTypes.object}

export default LayoutMain
