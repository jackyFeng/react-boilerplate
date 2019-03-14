import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'action';
import requireAuth from 'components/requireAuth';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''})
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter a Comment</h4>
                    <textarea 
                        placeholder="Here is my comment"
                        value={this.state.comment}
                        onChange={this.handleChange} />
                    <div>
                        {/* button without type attribute behaves like submit */}
                        <button>Submit</button> 
                    </div>
                </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    };
}

export default connect(null, actions)(requireAuth(CommentBox));