import React from 'react'

export default function(props) {
    return (
        <div className="app">
            <h1>{ props.title }</h1>
            <main>
                { props.children }
            </main>
        </div>
    )
}
