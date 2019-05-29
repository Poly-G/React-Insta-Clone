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
                        {this.state.comments.map(comment => {
                            return (
                                <div>
                                    <span className="commentUsername">{comment.username}</span>
                                    <span className="commentText">{comment.text}</span>
                                </div>
                            )
                        })}
                    </div>

                    <hr />

                    
                </div>
            </div>
        )
    }
}

export default CommentSection;
