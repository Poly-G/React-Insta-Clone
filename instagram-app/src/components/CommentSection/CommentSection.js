import React, { Component } from 'react'

class CommentSection extends Component {
    state = {
        comments: [...this.props.comments],
        inputText: '',
        likes: this.props.likes
    }

    render() {
        return (
            <div>
                <div className="comment-section">
                    <div className="comments">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentSection;
