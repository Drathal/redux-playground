import React, { PropTypes } from 'react'
import DevTools from '../../containers/DevTools';

const App = ({children}) => <div className={ 'app' }>
                                { children }
                                { process.env.NODE_ENV === 'development' && <DevTools /> }
                            </div>

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
