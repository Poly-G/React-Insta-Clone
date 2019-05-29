import React, { Component } from 'react'
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    render() {
        
        return (
            <div>
                {this.props.data.map(post => {
                    return (
                        <div className="post-container">

                            <div className="header">
                                <img
                                className="thumbnail"
                                src={post.thumbnailUrl}
                                alt="thumbnail"
                                />
                                <p className="username">{post.username}</p>
                            </div>

                            <div className="image-container">
                                <img className="postImage" src={post.imageUrl} alt="post" />
                            </div>

                            <div className="footer">
                                <div className="footer-icons">
                                    <a> <i className="far fa-heart"></i> </a>
                                    <i className="far fa-comment"></i>
                                </div>
                                <div className="likes">{post.likes} likes</div>
                            </div>
                            <CommentSection comments={post.comments} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostContainer;
