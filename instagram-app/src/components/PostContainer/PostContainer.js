import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    render() {
        
        return (
            <div>
                {this.props.data.map(post => {
                    return (
                        <div className="header">
                            <img
                            className="thumbnail"
                            src={post.thumbnailUrl}
                            alt="thumbnail"
                            />
                            <p className="username">{post.username}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostContainer;
