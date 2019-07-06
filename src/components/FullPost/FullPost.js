import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        selectedPosts: null
    }
    getProps = ()=>{
    this.setState({selectedPosts: this.props.selectedPost})}
    render () {

        console.log(this.state.selectedPosts)
        let post =<p style={{textAlign:'center'}}>Please select a Post!</p>;

        if(this.props.selectedPost != null){
            console.log(this.props.selectedPost)

            post = (
                <div className="FullPost">
                    <h1>{this.props.selectedPost[0].title}</h1>
                    <p>{this.props.selectedPost[0].body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            )}

        return post;
    }
}

export default FullPost;