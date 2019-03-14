import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
    // ComposedComponent is HOC which is used to handle reusable logic
    class ComposedComponent extends Component {
        // when component just mounted
        componentDidMount() {
            this.shoudNavigateAway();
        }

        // when component just updated
        componentDidUpdate() {
            this.shoudNavigateAway();
        }

        shoudNavigateAway() {
            if (!this.props.auth) {
                console.log('I need to leave');
                // this.props.history allows us programatically navigate around our application
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;