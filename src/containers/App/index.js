import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';

export default class App extends Component {

    render(props) {
        return (
            <div>
                { 'APP' }
                { this.props.children }
                { 'APP' }
                { 'APP' }
            </div>
            );
    }
}
