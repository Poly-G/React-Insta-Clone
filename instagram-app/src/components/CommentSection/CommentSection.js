import React, { Component } from 'react'

class CommentSection extends Component {
    state = {
        comments: this.props.comments,
        text: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
                username: 'User',
                text: this.state.text
            }
        this.setState({
            comments:[...this.state.comments, newComment],
            text:''
        })
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

                    <form 
                    className="comment-form"
                    onSubmit={this.addNewComment}
                    >

                        <input 
                        type="text"
                        name="text"
                        placeholder="Add a comment..."
                        onChange={this.handleChange}
                        value={this.state.text}
                        />

                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;
